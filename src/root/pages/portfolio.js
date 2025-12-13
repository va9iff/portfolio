// @ts-check

import { cards } from "../cards.js"
import { tags, style, set, linkStyle, curry } from "../hu.js"

const { div, h1, h3, span } = tags

const row = style({ display: 'flex' })
const col = style({ display: 'flex', flexDirection: 'column' })

const res = import.meta.resolve

await linkStyle(res("./portfolio.css"))

/** @type {{
    title: string,
    imgs?: { src: string }[],
    fullwidth?: boolean,
    paragraph: string,
}[]} */

const projects = [
    {
        title: "TEKNOFEST 2025: Istanbul",
        imgs: [
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
        ],
        paragraph: `
            As much mud in the streets as if the waters had but newly retired from the face of the
            earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling
            like an elephantine lizard up Holborn Hill. 
            As much mud in the streets as if the waters had but newly retired from the face of the
            earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling
            like an elephantine lizard up Holborn Hill. 
            As much mud in the streets as if the waters had but newly retired from the face of the
            earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling
            like an elephantine lizard up Holborn Hill. 
            As much mud in the streets as if the waters had but newly retired from the face of the
            earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling
            like an elephantine lizard up Holborn Hill. 
            As much mud in the streets as if the waters had but newly retired from the face of the
            earth, and it would not be wonderful to meet a Megalosaurus, forty feet long or so, waddling
            like an elephantine lizard up Holborn Hill. 
        `
    },
    {
        title: "hiii",

        paragraph: `zard up Holborn Hill. As much mud in the streets as if the waters had but newly
        retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
        forty feet long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in
        the streets as if the waters had but newly retired from the face of the earth, and it would
        not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine
        lizard up Holborn Hill. As much mud in the streets as if the waters had but newly retired
        from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet
        long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in the streets
        as if the waters had but newly retired from the face of the earth, and it would not be
        wonderful to me`

    },

]

const noop = () => {}

// TODO: move styles to a css and use loadStyle from hu
export const portfolio = div(
    h1("Portfolio", 
        set({
            className: 'title'
        })
    ),
    ...projects.map(p => 
        div(
            set({
                className: "g"
            }),
            style({
                background: '#161818',
                borderRadius: '17px',
                flexDirection: 'columnt',
                padding: '23px',
                marginTop: "14px"
            }),
            par => {
                const { imgs } = p
                if (!imgs) return
                const container = cards({
                    bg: "#161818",
                    slides: imgs,
                    width: 400 + 'px',
                    aspect: 800 / 600,
                })
                curry(container, style({
                    float: 'left', 
                    marginRight: '10px',
                    marginBottom: '4px',
                    position: 'relative',
                }))
                container.classList.add("fullWidthOnMobile")
                par.appendChild(container)
            },
            h3(
                p.title,
                style({
                    fontSize: '33px',
                    color: "#ffffff",
                    fontWeight: '600',
                    paddingBottom: '4px',
                    paddingTop: '6px',
                    //paddingLeft: '10px',
                })
            ),
            span(
                style({
                    fontSize: '16px'
                }),
                p.paragraph
            )
        ),
    ),
)


