const c = document.querySelector(".hello:first-child h1");

function a() {
    const clickedClass = "clicked sexy-font";
    if(c.className === clickedClass) {
        c.className = "";
    } else {
        c.className = clickedClass;
    }
}

c.addEventListener("click", a);