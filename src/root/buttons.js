
const classes = ['a0', 'a1', 'a2', 'a3',]
const sideButtons = document.querySelector(".sideButtons")
let current = 0
document.querySelectorAll(".sideBtn.tab").forEach((btn, i) => {
    btn.onclick = () => {
        console.log(i)
        for (const cls of classes) sideButtons.classList.remove(cls)
        sideButtons.classList.add("a"+i)
        if (i < current) {
            sideButtons.classList.add("flyingToLeft")
            setTimeout(() => {
                sideButtons.classList.remove("flyingToLeft")
            },64)
        }
        if (i > current) {
            sideButtons.classList.add("flyingToRight")
            setTimeout(() => {
                sideButtons.classList.remove("flyingToRight")
            },64)

        }
        current = i
    //    document.querySelectorAll(".sideBtn").forEach(btn => {
    //        btn.classList.remove("active")
    //    })
    //    btn.classList.add("active")
    }
})

