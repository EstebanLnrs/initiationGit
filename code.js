
buttons = document.querySelectorAll('button');

buttons.forEach((butn, i) => {
    butn.addEventListener("mouseover", () => {
        rota = butn.animate([
            { transform: `rotate(360deg)` },
            { transform: `rotate(0deg)` }
        ], {
            duration: 1000,
            fill: "forwards"
        })
    })
})


