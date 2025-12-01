// @ts-check

// TODO take the initial page and cache it

import { tags } from "./hu.js"

const classes = ['a0', 'a1', 'a2', 'a3',]
const sideButtons = /** @type { HTMLDivElement } */ (document.querySelector(".sideButtons"))

const table = {
    profile: async () => (await import("./pages/profile.js")).profile,
    certificates: async () => (await import("./pages/certificates.js")).certificates,
    portfolio: async () => (await import("./pages/portfolio.js")).portfolio,
}

/** @type {{ [key in keyof table]?: Awaited<ReturnType<table[key]>> }} */
const cached = {}

// TODO(content) import them all from an initial script which exports those
const content = /** @type { HTMLDivElement } */ (document.querySelector(".content"))

var currentPage = /** @type { HTMLDivElement } */ (document.querySelector(".initialPage"))
let activeId = currentPage.getAttribute("data-page-id")

/** @param { keyof table } id */
function switchPage(id) {
    currentPage.remove()
    activeId = id // but it's just loading
    if (cached[id]) {
        currentPage = cached[id]
        content.appendChild(cached[id])
    } else {
        // TODO(loader)
        table[id]().then(el => {
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

        console.log('aj')
buttons.forEach((btn, i) => {
    setTimeout(() => console.log(btn), 800)
    btn.addEventListener("click", _e => {
        const id = /** @type { keyof table } */ (btn.getAttribute("data-btn-id"))
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

