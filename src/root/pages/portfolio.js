// @ts-check

import { cards } from "../cards.js"
import { tags, style, set } from "../hu.js"
const { div, h1, h3, span } = tags

const row = style({ display: 'flex' })
const col = style({ display: 'flex', flexDirection: 'column' })

export const portfolio = div(
    h1("Portfolio", 
        set({
            className: 'title'
        })
    ),
    div(
        set({
            className: "g"
        }),
        style({
            background: '#161818',
            borderRadius: '17px',
            flexDirection: 'columnt',
            padding: '23px',
        }),
        div(
            style({ 
                float: 'left', 
                marginRight: '10px',
                marginBottom: '4px',
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
            }),
        ),
        h3(
            "TEKNOFEST 2025: Istanbul",
            style({
                fontSize: '45px',
                fontWeight: '600',
                paddingBottom: '4px',
                paddingTop: '6px',
                paddingLeft: '10px',
            })
        ),
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
        'sdlkfjal lkjsfdal; hjsdiofaj klasdfj klsadf ;kls ja ;klfj sda;ljhasf lkj afdlk ',
    ),
)


