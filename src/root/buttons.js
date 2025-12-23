// @ts-check

// TODO take the initial page and cache it

import { tags, set, linkStyle } from "./hu.js"

const { button, img } = tags

import { content } from "./base.js"

const classes = ['a0', 'a1', 'a2', 'a3',]

/*
          <button data-btn-id="profile" class="sideBtn tab">
            <img src="./assets/card.svg" alt="About Me" title="About me">
          </button>
          <button data-btn-id="certificates" class="sideBtn tab">
            <img src="./assets/cert.svg" alt="Education" title="Education">
          </button>
          <button data-btn-id="portfolio" class="sideBtn tab">
            <img src="./assets/portfel.svg" alt="Projects" title="Projects">
          </button>
*/

import { sideButtons } from "./base.js"

var currentPage = /** @type { HTMLDivElement } */ (document.querySelector(".initialPage"))
let activeId = /** @type { string } */ (currentPage.getAttribute("data-page-id"))
/** @description !!! to change it, use fixHighlightIndex function */
let currentActiveIndex = 0

const buttonElements = [
    {
        id: "certificates",
        img: "cert.svg",
        title: "Education"
    },
    {
        id: "profile",
        title: "About me",
        img: "card.svg"
    },
    {
        id: "portfolio",
        img: "portfel.svg",
        title: "Projects"
    }
].map((it, i) => { 
    if (it.id === activeId) currentActiveIndex = i
    return button(
        btn => { 
            btn.setAttribute("data-btn-id", it.id) 
            btn.setAttribute("alt", it.title) 
            btn.setAttribute("title", it.title) 
        },
        set({ className: `sideBtn tab` }),
        img(
            set({
                src: `./assets/${it.img}`
            })
        )
    ) 
})

for (const btn of buttonElements) sideButtons.appendChild(btn)

/** @type {{ [key in keyof pageTable]?: Awaited<ReturnType<pageTable[key]>> }} */
const cached = {}
cached[activeId] = currentPage

const pageTable = {
    // we don't need it, we already have it cached so this function won't be fired ever.
    // and the name for it is actually encoded in the html with the attribute - data-page-id
    // which is then read from the button's attribute - data-btn-id
    // profile: async () => currentPage,
    certificates: async () => (await import("./pages/certificates.js")).certificates,
    portfolio: async () => (await import("./pages/portfolio.js")).portfolio,
}

/** @param { keyof pageTable } id */
function switchPage(id) {
    if (id === activeId) {
        window.scroll({
            behavior: "smooth",
            top: 0
        })
        return
    }
    currentPage.remove()
    activeId = id // but it's just loading
    if (cached[id]) {
        currentPage = cached[id]
        content.appendChild(cached[id])
    } else {
        // TODO(loader)
        pageTable[id]().then(el => {
            // if the user hasn't changed the active one before we append
            if (id === activeId) {
                cached[id] = el
                currentPage = el
                content.appendChild(el)
            }
        })
    }
}


/** @type {NodeListOf<HTMLButtonElement>} */
const buttons = document.querySelectorAll(".sideBtn.tab")

/** @param { number } i */
const fixHighlightIndex = i => {
    for (const cls of classes) sideButtons.classList.remove(cls)
    sideButtons.classList.add("a"+i)
    if (i < currentActiveIndex) {
        sideButtons.classList.add("flyingToLeft")
        setTimeout(() => {
            sideButtons.classList.remove("flyingToLeft")
        },64)
    }
    if (i > currentActiveIndex) {
        sideButtons.classList.add("flyingToRight")
        setTimeout(() => {
            sideButtons.classList.remove("flyingToRight")
        },64)
    }
    currentActiveIndex = i
}
fixHighlightIndex(currentActiveIndex)

buttons.forEach((btn, i) => {
    setTimeout(() => console.log(btn), 800)
    btn.addEventListener("click", _e => {
        const id = /** @type { keyof pageTable } */ (btn.getAttribute("data-btn-id"))
        switchPage(id)
        fixHighlightIndex(i)
    })
    btn.onclick = () => {
    }
})

// TODO: move it to top of the script
await linkStyle("./style/core/buttons.css")
// and show buttons when as soon as possible.
sideButtons.classList.remove("hidden")

// this should be after cuz order of link tags matters 
// for overriding css properties
linkStyle("./style/core/buttons-anim.css")

buttonElements[0].click()
