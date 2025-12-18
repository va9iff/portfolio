mobile: bottom padding of scrolling body with the same size of the height of the bottom menu row
calc(menuItemWidth * menuHeightRatio)

Cards shadows are cropped

There's weird 1px visibility on cards container that shows the cards even if there's a fade that
covers them. Somehow on the edges of the parent, the childs are visible despite having another
elements on top of them.
