// @ts-check

import { cards } from "./cards.js"

import { tags, set, style } from "./hu.js"

const { div } = tags

// TODO(content)
const c = document.querySelector(".content")
if (!c) throw new Error("jajaka")

c.appendChild(
    div(
        set({
            className: "g"
        }),
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
            ]
        })
    )
)
