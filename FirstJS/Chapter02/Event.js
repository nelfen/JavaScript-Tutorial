const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gond!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

//h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);