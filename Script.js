/*=========================================
BOX PREMIUM
script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        NAVBAR
    =====================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background = "rgba(255,255,255,.96)";
            header.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";

        } else {

            header.style.background = "rgba(255,255,255,.80)";
            header.style.boxShadow = "none";

        }

    });

    /*=====================================
        FAQ
    =====================================*/

    const items = document.querySelectorAll(".item");

    items.forEach(item => {

        const button = item.querySelector("button");

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

    /*=====================================
        SCROLL ANIMATION
    =====================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .15
    });

    document.querySelectorAll("section,.card,.price-card,.spec-grid div,.testimonial")
        .forEach(el => {

            el.classList.add("hidden");

            observer.observe(el);

        });

    /*=====================================
        COUNTER
    =====================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const current = +counter.innerText;

            const increment = target / 80;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

    /*=====================================
        SIMULADOR
    =====================================*/

    const slider = document.getElementById("cantidad");

    if (slider) {

        const compra = document.getElementById("compra");

        const venta = document.getElementById("venta");

        const utilidad = document.getElementById("utilidad");

        const cantidad = document.getElementById("cantidadValor");

        const costo = 14.68;

        const precio = 30;

        const calcular = () => {

            const cajas = parseInt(slider.value);

            cantidad.innerHTML = cajas;

            compra.innerHTML =
                "$" + (cajas * costo).toFixed(2);

            venta.innerHTML =
                "$" + (cajas * precio).toFixed(2);

            utilidad.innerHTML =
                "$" + ((precio - costo) * cajas).toFixed(2);

        };

        slider.addEventListener("input", calcular);

        calcular();

    }

    /*=====================================
        BOTÓN ARRIBA
    =====================================*/

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "top-button";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("active");

        } else {

            topButton.classList.remove("active");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});

/*=========================================
CSS generado desde JS
=========================================*/

const style = document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:.8s;

}

.show{

opacity:1;

transform:translateY(0);

}

.top-button{

position:fixed;

right:30px;

bottom:110px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#c89b3c;

color:white;

font-size:22px;

cursor:pointer;

opacity:0;

pointer-events:none;

transition:.35s;

box-shadow:0 12px 25px rgba(0,0,0,.25);

z-index:999;

}

.top-button.active{

opacity:1;

pointer-events:auto;

}

.top-button:hover{

transform:translateY(-5px);

background:#d7a53a;

}

`;

document.head.appendChild(style);