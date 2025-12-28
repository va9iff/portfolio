// @ts-check

import { cards } from "../cards.js"
import { tags, style, set, linkStyle, curry } from "../hu.js"

const { div, h1, br, b, h3, span, img, a } = tags

const row = style({ display: 'flex' })
const col = style({ display: 'flex', flexDirection: 'column' })

const res = import.meta.resolve

await linkStyle(res("./portfolio.css"))

/** @typedef {{
    title: string,
    imgs?: { src: string }[],
    shine?: string,
    chipLinks?: {
        icon: string,
        href: string,
    }[],
    fullwidth?: boolean,
    paragraph: string | HTMLElement,
}} Project */


/** @type { Project} */ 
const fudir = {
  title: "Order - Table Management System",
  imgs: [
    {
      src: res("../assets/projects/fudir/fudir-menu.png"),
    },
    {
      src: res("../assets/projects/fudir/fudir-admin.png"),
    },
    {
      src: res("../assets/projects/fudir/fudir-register.png"),
    },
  ],
  chipLinks: [
      {
          icon: "hyperlink",
          href: "https://va9iff.github.io/fudir/"
      },
  ],
  paragraph: div(
    style({
        marginTop: '9px'
    }),
  `Easily build your own menu with your food and price. Offer discounts for big orders with Sets and
  Combo Menus. Clients are managed by the tables so you can have 2 parallel ongoing checks and add
  the clients' orders progressively to their tables. Once the client is done, you get their checks
  with 1 click and the results are calculated to give you a daily summary. All your data is saved
  locally and can be exported as CSV file. Menu is only editable with the admin password. All your
  edits are reflected to the menu tab. `, span(style({ minWidth: "25px", display: 'inline-block' })), b("Admin password: 2024"), 
  )
}

/** @type { Project} */ 
const tesol = {
  title: "  `Tesol - Zen Tests`",
  imgs: [
    {
      src: res("../assets/projects/tesol/tesol-right.png"),
    },
    {
      src: res("../assets/projects/tesol/tesol-wrong.png"),
    }
  ],
  chipLinks: [
      {
          icon: "hyperlink",
          href: "https://va9iff.github.io/tesol/"
      },
  ],
  paragraph: div(
    style({
        marginTop: '9px'
    }),

    `Aside from being a platform, this open-source project defines its own language to write tests
    on top of HTML. Which means you can not only write traditional tests in ease, but also design
    tests with media such as sounds from Google Drive or wherever you like, put YouTube videos and
    literally anything that's possible on the web.

    When Tesol was designing, the  was always mattered the most. You can: Swipe your finger to
    switch back-n-fore between questions. Bring the answers down near to your finger. Switch to its
    own dark theme

    The other most striking feature Tesol is that its overall user experience. To be more specific,
    . The questions of the test are pre-loaded. This makes Tesol work seamless smooth.

    With all these features, Tesol also has mode to go even more "zen". There's a mode which will
    tell the user their answer is whether right or wrong when they select immediately.

    Is there a downside of pre-loading? No. The questions are stored in a text file. Any external
    media will be loaded when question is rendered. Sure, it'll load a bit late. But this loading
    will happen only once.`

  )
}

/** @type { Project } */
const won = {
  title: "WON OS - Web Desktop",
  imgs: [
    { src: res("../assets/projects/won/won-general.png") },
    { src: res("../assets/projects/won/won-stress1.png") },
  ],
  chipLinks: [
      {
          icon: "hyperlink",
          href: "https://va9iff.github.io/WON/"
      },
  ],
  paragraph: 
  div(
    style({
        marginTop: '9px'
    }),

    `My 2022 Web OS idea demo. Although the project is called an "OS" WON is actually a harmony
    convention. It's a web implementation of window management system with the functioning apps and
    inter-application communication. From the user's perspective, it's similar to Google's Drive but
    with apps and customisations and compatibility with any backend storage service. The idea is
    ambitious but totally possible with enough interest.`)

}

/** @type { Project } */
const v9 = {
  title: "V9 - Old Portfolio",
  shine: "#ff50a0aa",
  imgs: [
    { src: res("../assets/projects/v9/v9-standby-big.gif") },
    { src: res("../assets/projects/v9/v9-network.gif") },
  ],
  chipLinks: [
    {
      icon: "hyperlink",
      href: "https://va9iff.github.io/v9"
    },
  ],
  paragraph: div(

    ` I smacke various techniques that I learnt throughout the years for this project. But
    eventually, I wanted an extremely simple and fast and dumb-proof portfolio, that's why I created
    this on. Also my design taste has changed up a bit, which is visible from the style choices between
    between the projects from different years.`

  )
}

/** @type { Project[] } */
const projects = [
    won,
    v9,
    tesol,
    fudir,
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
                src: 'assets/glitchy.min.jpeg',
            },
            {
                src: 'assets/blurry.min.jpg',
            },
            {
                src: 'assets/glitchy.min.jpeg',
            },
            {
                src: 'assets/glitchy.min.jpeg',
            },
        ],
        paragraph: div(
            style({
                marginTop: '9px'
            }),
        `
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
        `)
    },
    {
        title: "Pseunim - Pseudo Animations",
        shine: "#ffa500aa",
        chipLinks: [
            {
                icon: "i",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
        ],
        paragraph: div(

            style({
                marginTop: '9px'
            }),
        `zard up Holborn Hill. As much mud in the streets as if the waters had but newly
        retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
        forty feet long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in
        the streets as if the waters had but newly retired from the face of the earth, and it would
        not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine
        lizard up Holborn Hill. As much mud in the streets as if the waters had but newly retired
        from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet
        long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in the streets
        as if the waters had but newly retired from the face of the earth, and it would not be
        wonderful to me`)
    },

    {
        title: "hiii",
        chipLinks: [
            {
                icon: "i",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
            {
                icon: "hyperlink",
                href: "#"
            },
        ],
        paragraph: div(
            style({
                marginTop: '9px'
            }),
        `zard up Holborn Hill. As much mud in the streets as if the waters had but newly
        retired from the face of the earth, and it would not be wonderful to meet a Megalosaurus,
        forty feet long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in
        the streets as if the waters had but newly retired from the face of the earth, and it would
        not be wonderful to meet a Megalosaurus, forty feet long or so, waddling like an elephantine
        lizard up Holborn Hill. As much mud in the streets as if the waters had but newly retired
        from the face of the earth, and it would not be wonderful to meet a Megalosaurus, forty feet
        long or so, waddling like an elephantine lizard up Holborn Hill. As much mud in the streets
        as if the waters had but newly retired from the face of the earth, and it would not be
        wonderful to me`)

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
                flexDirection: 'columnt', // lol fix it TODO
                padding: '23px',
                marginTop: "14px",
                position: 'relative',
                display: 'flow-root'
            }),
            p.shine ? style({
                //border: '2px solid #ffa500aa',
                border: '2px solid ' + p.shine,
            }) : noop,
            div(
                set({ className: "fullWidthOnMobile noselect" }),
                style({
                    display: (p.imgs?.length || p.chipLinks?.length) ? 'flex' : 'none',
                    width: "400px",
                    marginRight: '10px',
                    position: 'relative',
                    minWidth: '2px',
                    float: 'left', 
                    flexDirection: "column",
                    gap: '13px',
                    marginBottom: '5px',
                }),
                par => {
                    const { imgs } = p
                    if (!imgs) return
                    const container = cards({
                        bg: "#161818",
                        slides: imgs,
                        width: "100%",
                        aspect: 800 / 600,
                    })
                    par.appendChild(container)
                },
                div(
                    set({ className: "chipLinksContainer" }),
                    ...(chipLinks?.map(i => 
                        a(
                            set({ target: "_blank", href: i.href, className: "chipLink" }),
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
                set({ className: "projectTitle" }),
                p.title,
                style({
                    fontSize: '33px',
                    color: "#ffffff",
                    fontWeight: '600',
                    //paddingBottom: '1em',
                    //paddingTop: '6px',
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


