// @ts-check

import { tags, set, on, style } from "./hu.js"

const { div, img } = tags
const scale = .4

const bgDarker = '#161818'

const shadow = 12

/** @param {{
    slides: ({ src: string })[],
    h?: number,
    w?: number,
    bg?: string
}} arg */
export function cards(arg) {
    const { slides } = arg
    const bg = arg.bg ?? '#1d2021'
    const w = arg.w ?? 800
    const h = arg.h ?? 600
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
                    left: shadow + i * (stackWidth / length) * w + 'px',
                    top: `${shadow}px`,
                    width: w + 'px',
                    height: h + 'px',
                    boxShadow: i > 0 ? `-13px 0 ${shadow}px #1119` : "",
                    borderRadius: `${64 * scale}px`,
                })
            )
        )

    const fadeBlur = 10
    const borderFade = div(
        style({
            zIndex: '4',
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
            borderRadius: `4%`,
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

const c = document.querySelector(".content")
if (!c) throw new Error("jajaka")

c.appendChild(
    div(
        style({
            background: '#161818',
            //boxShadow: "0 0 15px #1119 inset",
            display: 'flex',
            borderRadius: '17px',
            flexDirection: 'columnt',
            padding: '10px',
        }),
        cards({
            w: 800 * .4,
            h: 600 * .4,
            bg: "#161818",
            slides: [
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
            ]
        })
    )
)
