// @ts-check

import { cards } from "../cards.js"
import { tags, style, set, linkStyle, curry } from "../hu.js"

const { div, h1, h3, span, img, a } = tags

const row = style({ display: 'flex' })
const col = style({ display: 'flex', flexDirection: 'column' })

const res = import.meta.resolve

await linkStyle(res("./portfolio.css"))

/** @type {{
    title: string,
    imgs?: { src: string }[],
    shine?: boolean,
    chipLinks?: {
        icon: string,
        href: string,
    }[],
    fullwidth?: boolean,
    paragraph: string,
}[]} */

const projects = [
    {
        title: "TEKNOFEST 2025: Istanbul",
        chipLinks: [
            {
                icon: "i",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            // TODO: maybe a flex grow kinda chip that spans below the whole carousell
        ],
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
        shine: true,

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
    ...projects.map(p => { 
        const { chipLinks } = p
        return div(
            set({
                className: "g"
            }),
            style({
                background: '#161818',
                borderRadius: '17px',
                flexDirection: 'columnt',
                padding: '23px',
                marginTop: "14px",
                position: 'relative',
            }),
            p.shine ? style({
                border: '2px solid #ffa500aa',
            }) : noop,
            div(
                set({ className: "fullWidthOnMobile" }),
                style({
                    display: 'flex',
                    position: 'relative',
                    float: 'left', 
                    flexDirection: "column",
                    gap: '13px',
                    marginBottom: '4px',
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
                        marginRight: '10px',
                    }))
                    container.classList.add("fullWidthOnMobile")
                    par.appendChild(container)
                },
                div(
                    style({
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '9px',
                        paddingLeft: '6px',
                    }),
                    ...(chipLinks?.map(i => 
                        a(
                            set({ href: i.href }),
                            style({
                                position: 'relative',
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: "50%",
                                border: "#b9b66d 2px solid",
                            }),
                            img(
                                set({
                                    src: `assets/icons/${i.icon}.svg`
                                }),
                                style({
                                    position: 'absolute',
                                    width: '70%',
                                    height: '70%',
                                }),
                            ),
                        )
                    ) ?? [])
                )
            ),
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
        )
    }),
)


