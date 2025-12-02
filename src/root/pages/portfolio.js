// @ts-check

import { tags, set } from "../hu.js"
const { div, h3 } = tags

export const portfolio = div(
    set({
        className: 'g'
    }),
    h3('project 1'),
    h3('project 2'),
    h3('project 3'),
    h3('project 4'),
)


