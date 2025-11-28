// @ts-check

const overlay = document.createElement("div")
overlay.classList.add("imagerOverlay")

overlay.style.display = 'none'
document.body.appendChild(overlay)

/** @param {HTMLImageElement} img */
const openImager = img => {
    overlay.innerHTML = ""
    overlay.style.display = 'flex'
    const bounds = img.getBoundingClientRect()
    const { left, top, width, height } = bounds
    const imgel = document.createElement("img")
    imgel.style.position = 'absolute'
    imgel.style.width = width + 'px'
    imgel.style.height = height + 'px'
    imgel.style.left = left + 'px'
    imgel.style.top = top + 'px'
    imgel.style.transition = '113ms'
    setTimeout(() => {
        imgel.style.width = '90%'
        imgel.style.height = '90%'
        imgel.style.left = '5%'
        imgel.style.top = '5%'
    }, 4)
    imgel.src = img.src
    overlay.appendChild(imgel)
}

const closeImager = () => {
    overlay.style.display = 'none'
}

overlay.addEventListener("mousedown", e => {
    closeImager()
})

overlay.addEventListener("wheel", e => {
    closeImager()
})

document.body.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeImager()
    }
})

document.addEventListener("scroll", () => {
    closeImager()
})

/** @param { HTMLImageElement } img */
export function imager(img) {
    console.log(img)
    img.addEventListener('click', () => {
        openImager(img)
    })
}

