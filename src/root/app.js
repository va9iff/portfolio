//import { imager } from "./tools/imager.js";
//
//
//imager(document.querySelector("#pic"))

import { tags, set, on, style } from "./hu.js"

const { div, img } = tags

const w = 800
const h = 600

/** @param {
    ({ src: string })[]
} slides */
export function cards(slides) {
    const images = 
        slides.map((slide, i) => 
            img(
                set({
                    src: slide.src,
                    className: 'card-slide'
                }),
                style({ 
                    position: 'absolute',
                    top: '0px',
                    left: i * .1 * w + 'px',
                    width: w + 'px',
                    height: h + 'px',
                    boxShadow: i > 0 && '-13px 0 12px #333',
                    borderRadius: '70px',
                })
            )
        )

    const container = div(
        set({
            className: 'cards'
        }),
        style({
            position: 'relative',
            width: w + 'px',
            height: h + 'px',
            border: '4px solid magenta',
            overflow: 'hidden',
        }),
        on({
            mousemove(e) {

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
        src: 'assets/blurry.jpg',
    },
    {
        src: 'assets/blurry.jpg',
    },
    {
        src: 'assets/blurry.jpg',
    },
]))
