// @ts-check

import { cards } from "../cards.js"
import { set, tags, style, curry } from "../hu.js"
const { div, h4, h1, span, h3, a, img, p, b } = tags
const noop = () => {}

const res = import.meta.resolve

const marbo = style({ 
    marginBottom: "9px",
})

export const certificates = div(
    h1("Education", 
        set({
            className: 'title'
        })
    ),

    div(
        set({ className: "g edu-entry" }),
        style({
            display: 'flex',
            gap: '15px',
            flexDirection: 'row',
            padding: '23px',
            position: 'relative',
        }),
        div(
            style({
                //flex: '5'
            }),
            cards({
                bg: "var(--bg)",
                slides: [ 
                    { src: res("../assets/bgg.png" ) } ,
                    { src: res("../assets/images/asoiu.min.jpeg" ) } ,
                ],
                width: "444px",
                aspect: 600 / 500,
            }),
        ),
        div(
            h3(
                set({ className: "projectTitle" }),
                h1("ASOIU"),
                style({
                    fontSize: '33px',
                    color: "#ffffff",
                    fontWeight: '600',
                })
            ),
            div(
                style({
                    opacity: '.8',
                    fontSize: '14px',
                    marginTop: '-12px',
                    marginBottom: '19px',
                }),
                a(
                    style({ color: 'inherit', textDecoration: 'none' }),
                    set({ href: 'https://asoiu.edu.az/', target: "_blank" }),
                    "Azerbaijan State Oil and Industry University"
                )
            ),
            div(
                style({
                    fontSize: '16px',
                    //flex: "3"
                }),
                div(
                    div(
                        style({
                            fontSize: "23px"
                        }),
                        b("Masters's"), " ",
                        "in Information Security and Defence (English Lectures)", 
                    ),
                )
            ),
            div(
                '2024-2026',
                style({
                    opacity: ".7",
                    marginTop: "19px",
                    fontSize: "17px"
                })
            )
        )
    ),

    div(
        set({ className: "g edu-entry" }),
        style({
            display: 'flex',
            gap: '15px',
            flexDirection: 'row',
            padding: '23px',
            position: 'relative',
        }),
        div(
            style({
                //flex: '5'
            }),
            cards({
                bg: "var(--bg)",
                slides: [ 
                    { src: res("../assets/images/unec-kids-lib-lay.min.jpeg" ) } ,
                    { src: res("../assets/images/unec-cube.min.jpeg" ) } ,
                ],
                width: "444px",
                aspect: 600 / 500,
            }),
        ),
        div(
            h3(
                set({ className: "projectTitle" }),
                h1("UNEC"),
                style({
                    fontSize: '33px',
                    color: "#ffffff",
                    fontWeight: '600',
                })
            ),
            div(
                style({
                    opacity: '.8',
                    marginTop: '-12px',
                    marginBottom: '19px',
                    fontSize: '14px',
                }),
                a(
                    style({ color: 'inherit', textDecoration: 'none' }),
                    set({ href: 'https://unec.edu.az/', target: "_blank" }),
                    "Azerbaijan State University of Economics"
                ),
            ),
            div(
                style({
                    fontSize: '16px',
                    //flex: "3"
                }),
                div(
                    div(
                        style({
                            fontSize: "23px"
                        }),
                        b("Bachelor's"), " ",
                        "in Information Security", 
                    ),
                )
            ),
            div(
                '2020-2024',
                style({
                    opacity: ".7",
                    marginTop: "19px",
                    fontSize: "17px"
                })
            )
        ),
    ),
    div(
        set({
            className: 'title'
        })
    ),
)

