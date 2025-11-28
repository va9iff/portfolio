// @ts-check

/** 
    @template { keyof HTMLElementTagNameMap } T
    @typedef {
        string | number | HTMLElement | Text |
        ((element: HTMLElementTagNameMap[T]) => void) 
    } argType 
*/

/** @template { keyof HTMLElementTagNameMap } T */
const tags = new Proxy(
    /** @type {{ 
        [T in keyof HTMLElementTagNameMap]: 
            (...args: argType<T>[]) => HTMLElementTagNameMap[T] 
    }} */ ({}),
    {
        /** @param { string } prop */
        get(_, prop) {
            /** @param { argType<T>[] } args */
            return function(...args) {
                const element = /** @type { HTMLElementTagNameMap[T] } */
                    (document.createElement(prop))
                for (const arg of args) {
                    if (arg instanceof HTMLElement) element.appendChild(arg)
                    else if (typeof arg === 'string' || typeof arg === 'number')
                        element.appendChild(document.createTextNode(arg + ''))
                    else if (typeof arg === 'function') arg(element)
                    //else if (arg instanceof Comment) element.appendChild(arg)
                    else if (arg instanceof Text) element.appendChild(arg)
                    else throw new Error("dunno what to do w it")
                }
                return element
            }
        }
    }
)

/** 
 * @template E
 * @param { Partial<E> } props 
 */
const set = props => {
    /** @param { E } element */
    return element => {
        for (const key in props) {
            // @ts-ignore
            element[key] = props[key]
        }
    }
}

/** @param { Partial<CSSStyleDeclaration> } style */
const style = (style) => {
    /** @param {{ style: any }} element */
    return element => {
        for (const key in style) {
            element.style[key] = style[key]
        }
    }
}

/** 
    @template { HTMLElement } E
    @param {Partial<{ 
        [key in keyof HTMLElementEventMap]: 
            (this: E, e: (HTMLElementEventMap[key] & { currentTarget: E })) => void
    }>} events 
*/
const on = events => {
    /** @param { E } element */
    return element => {
        for (const e in events) {
            element.addEventListener(e, events[e])
        }
    }
}

/** @param { string } url */
const linkStyle = url => 
    new Promise(async (resolve, reject) => {
        const linkElement = document.createElement("link")
        linkElement.rel = "stylesheet"
        linkElement.href = url
        linkElement.addEventListener('load', () => resolve(linkElement))
        linkElement.addEventListener('error', err => reject(err.message))
        document.head.appendChild(linkElement)
    })

/**
 * @template E
 * @param { E } curried
 * @param { (curried: E) => any } returnedFunc
 * @description predefine the argument for returned function
 * so you can get proper types before you even call the function.
 * @example ```js
 * set({ no_type_information_there_for_el })(el)
 * curry(el, set({ valid_set_argument_for_el }))
 * ```
 */
const curry = (curried, returnedFunc) => returnedFunc(curried)

class Place {
    #element
    #isPinned = false
    #comment = document.createComment("place")
    /** @param { HTMLElement? } [initial] */
    constructor(initial) {
        this.#element = initial
    }
    /** @param { HTMLElement } el */
    pin = el => {
        if (this.#isPinned) throw new Error('trying to pin a pinned Place')
        el.appendChild(this.#comment)
        if (this.#element) el.appendChild(this.#element)
        this.#isPinned = true
    }
    /** @param { HTMLElement? } [element] */
    set = element => {
        this.#element?.remove()
        if (element) this.#comment.after(element)
        this.#element = element
    }
}

/** @template V */
class Atom {
    /** @param { V } value */
    constructor(value) { 
        this.value = value 
    }
    /** @type { (() => boolean)[] } */
    listeners = []
    /** 
     * @template { HTMLElement } E 
     * @param { (el: E, value: V) => boolean } func
     */
    listen(func) {
        /** @param { E } el */
        return el => {
            this.listeners.push(() => {
                return func(el, this.value)
            })
        }
    }
    /** TODO: just a weak reference to the created text node and update it while it's reachable */
    get text() {
        /** @param { HTMLElement } el */
        const text = document.createTextNode(this.value + '')
        this.listeners.push(() => { 
            text.textContent = this.value + '' 
            return true
        })
        return text
    }
    tap = () => { 
        this.listeners = this.listeners.filter(f => f()) 
    }
    /** @param { V } value */
    set(value) {
        this.value = value
        this.tap()
    }
}

// you can remove this part to use hu.js outside of a module
export { 
    tags, 
    set, 
    style, 
    on, 
    Place, 
    Atom,
    linkStyle,
    curry,
}

