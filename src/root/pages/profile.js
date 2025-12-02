// @ts-check

import { set, tags } from "../hu.js"
const { div, h1 } = tags

export const profile = div(
    set({
        className: 'g'
    }),
    h1("wuzzup beijing"),
    'hola',
    h1('lola')
)
