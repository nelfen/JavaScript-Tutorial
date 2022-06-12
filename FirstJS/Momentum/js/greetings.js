const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function inLoginSubmit(event) {
    event.preventDefault();  //Submit을 억제하여 페이지가 새로고침 되는것을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;  //Input에서 받은 값을 Value로 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
} 

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", inLoginSubmit);
} else {
    paintGreetings(savedUsername);
}