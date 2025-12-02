// @ts-check

import { set, tags, linkStyle } from "../hu.js"
const { div, h1 } = tags

await linkStyle("./style/page/profile.css")

export const profile = div(
    set({
        className: 'g'
    }),
    h1("wuzzup beijing"),
    'hola',
    h1('lola')
)
