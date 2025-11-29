// @ts-check

import { tags, set, on, style } from "./hu.js"

const { div, img } = tags
const scale = .4

const bgDarker = '#161818'

const shadow = 12

// TODO(dumb): for dumbs, touchstart will swipe 1 left or 1 right.
// then when they touchmove, it'll work as intended anyways.
// I just don't want it to feel broken for clicks.

/** @param {{
    slides: ({ src: string })[],
    // image elements aspect ratio
    aspect: number,
    bg: string,
    width: string,
}} arg */
export function cards(arg) {
    const { slides } = arg
    const { length } = slides

    const extendedPercent = 6.4
    const stackPercent = 20

    const slideWidthPercent = 100 - stackPercent - extendedPercent

    const xk = slideWidthPercent / 100
    const yk = arg.aspect

    const wrapper = div(
        style({
            position: 'relative',
            width: "100%",
            aspectRatio: arg.aspect + "",
            // when you enable that, you'll see that the bottom part is cropped.
            // that's intentional. lets say you have an aspect of 1/1
            // I will have some percent of X for shuffle parts. (stacking makes wider)
            // but I use percents in img elements, so the parent have to be 1/1 too.
            // but then I'll need to reduce the width of images to fit all to that yellow.
            // which will end up yellow's bottom being empty. 
            // so I calculate a new aspect that will crop the empty part in red one.
            //boxShadow: '0 0 0 4px yellow inset',
        })
    )
    const images = 
        slides.map((slide, i) => 
            img(
                set({
                    src: slide.src,
                }),
                style({ 
                    position: 'absolute',
                    transition: '800ms cubic-bezier(.33, 1, 0, 1)',
                    objectFit: 'cover',
                    top: '0',
                    left: `${i * (stackPercent / (length-1))}%`,
                    width: `${slideWidthPercent}%`,
                    height: `${slideWidthPercent}%`,
                    boxShadow: i > 0 ? `-13px 0 ${shadow}px #1119` : "",
                    borderRadius: `${25}px`,
                })
            )
        )

    const fadeBlur = 10

    let last = -1

    /** @param {number} x */
    const listener = x => {
        const bounds = container.getBoundingClientRect()
        const progPre = (x - bounds.left) / (bounds.width / images.length)
        const prog = progPre < 0 ? 0 : progPre
        const activeId = Math.floor(prog)
        if (last === activeId) return // to optimize
        last = activeId
        for (let i = 0; i < images.length; i++) {
            const image = images[i]
            if (i > activeId) image.style.translate = `${100 - extendedPercent}% 0`
            else image.style.translate = '0% 0'
        }

    }

    const container = div(
        style({
            width: arg.width,
            //resize: 'horizontal',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: `4%`,
            // new ratio which will hold stacked img elements.
            // the aspect ratio you give is for images, not container.
            aspectRatio: yk/xk+'',
            //border: '2px solid red',
        }),
        on({
            mousemove(e) {
                const x = e.clientX
                listener(x)
            },
            touchstart(e) {
                // for now, let's just reset.
                // its visuals looks off when you hold and move with touch but 
                // the final goal will move just 1 so it'll be good
                // check TODO(dumb)
                listener(1) 
            },
            touchend(e) {
                // prevent firing touchmove when it's just a tap
                e.preventDefault() 
            },
            touchmove(e) {
                const x = e.touches[0].clientX
                listener(x)
            }
        }),
    )
    for (const image of images) wrapper.appendChild(image)
    container.appendChild(wrapper)

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
            padding: '23px',
        }),
        cards({
            bg: "#161818",
            width: 400 + 'px',
            aspect: 800 / 600,
            slides: [
                {
                    src: 'assets/glitchy.png',
                },
                {
                    src: 'assets/blurry.jpg',
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
