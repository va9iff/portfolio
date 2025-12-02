// @ts-check

// TODO take the initial page and cache it

import { tags, linkStyle } from "./hu.js"

// TODO(content) import them all from an initial script which exports those
const content = /** @type { HTMLDivElement } */ (document.querySelector(".content"))

const classes = ['a0', 'a1', 'a2', 'a3',]
const sideButtons = /** @type { HTMLDivElement } */ (document.querySelector(".sideButtons"))

var currentPage = /** @type { HTMLDivElement } */ (document.querySelector(".initialPage"))
let activeId = /** @type { string } */ (currentPage.getAttribute("data-page-id"))
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


let currentActiveIndex = 0

/** @type {NodeListOf<HTMLButtonElement>} */
const buttons = document.querySelectorAll(".sideBtn.tab")

buttons.forEach((btn, i) => {
    setTimeout(() => console.log(btn), 800)
    btn.addEventListener("click", _e => {
        const id = /** @type { keyof pageTable } */ (btn.getAttribute("data-btn-id"))
        switchPage(id)
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
    //    document.querySelectorAll(".sideBtn").forEach(btn => {
    //        btn.classList.remove("active")
    //    })
    //    btn.classList.add("active")

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
