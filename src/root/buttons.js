
const classes = ['a0', 'a1', 'a2', 'a3',]
const sideButtons = document.querySelector(".sideButtons")
document.querySelectorAll(".sideBtn.tab").forEach((btn, i) => {
    btn.onclick = () => {
        console.log(i)
        for (const cls of classes) sideButtons.classList.remove(cls)
        sideButtons.classList.add("a"+i)
    //    document.querySelectorAll(".sideBtn").forEach(btn => {
    //        btn.classList.remove("active")
    //    })
    //    btn.classList.add("active")
    }
})

