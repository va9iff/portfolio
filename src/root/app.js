//import { imager } from "./tools/imager.js";
//
//
//imager(document.querySelector("#pic"))

import { tags, set, on, style } from "./hu.js"

const { div, img } = tags

const scale = .4

const w = 800 * scale
const h = 600 * scale


const bg = '#1d2021'

const shadow = 12

/** @param {
    ({ src: string })[]
} slides */
export function cards(slides) {
    const { length } = slides
    const stackWidth = .2
    const images = 
        slides.map((slide, i) => 
            img(
                set({
                    src: slide.src,
                    className: 'card-slide'
                }),
                style({ 
                    position: 'absolute',
                    transition: '800ms cubic-bezier(.33, 1, 0, 1)',
                    objectFit: 'cover',
                    top: '0px',
                    left: shadow + i * (stackWidth / length) * w + 'px',
                    top: `${shadow}px`,
                    width: w + 'px',
                    height: h + 'px',
                    boxShadow: i > 0 && `-13px 0 ${shadow}px #1119`,
                    borderRadius: `${64 * scale}px`,
                })
            )
        )

    const fadeWidth = 13
    const fadeBlur = 10
    const borderFade = div(
        style({
            zIndex: 4,
            boxShadow: `-${fadeBlur}px 0 ${fadeBlur}px ${bg}`,
            width: `${100}%`,
            position: 'absolute',
            left: '100%',
            height: '100%',
        })
    )

    const container = div(
        borderFade,
        set({
            className: 'cards'
        }),
        style({
            position: 'relative',
            width: shadow * 2 + w * (1 + stackWidth) + 'px',
            height: shadow * 2 + h + 'px',
            overflow: 'hidden',
            borderRadius: `${23 * scale}px`,
        }),
        on({
            mousemove(e) {
                const bounds = container.getBoundingClientRect()
                const progPre = (e.clientX - bounds.left) / (bounds.width / images.length)
                const prog = progPre < 0 ? 0 : progPre
                const activeId = Math.floor(prog)
                for (let i = 0; i < images.length; i++) {
                    const image = images[i]
                    if (i > activeId) image.style.translate = '90% 0'
                    else image.style.translate = '0% 0'
                }
            },
            touchstart(e) {

            }
        }),
    )
    for (const image of images) container.appendChild(image)

    return container
}

document.querySelector(".content").appendChild(cards([
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
    {
        src: 'assets/glitchy.png',
    },
]))
