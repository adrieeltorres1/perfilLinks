const btnUm = document.getElementById('btnUm')

btnUm.addEventListener('click', () => {
    window.location.href = "https://github.com/adrieeltorres1"

})

const btnDois = document.getElementById('btnDois')

btnDois.addEventListener('click', () => {
    window.location.href = "https://www.linkedin.com/in/adriel-torres-9a421a27b/"

})


const btnTres = document.getElementById('btnTres')

btnTres.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/adrieltorres_?igsh=MXZ2bm9nNjB0ZDRneg%3D%3D"

})

// Particulas

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".particles-container");

    for (let i = 0; i < 50; i++) { // Número de partículas
        let particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 2}s`;

        container.appendChild(particle);
    }
});