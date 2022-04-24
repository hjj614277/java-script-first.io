const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const CENTER_KEY = "center"

const link = document.querySelector("a");

function onLoginSubmit(tomato){
    tomato.preventDefault();
    loginForm.classList.remove(CENTER_KEY);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} Welcome!`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName == null)
{
    console.log("username is null!")
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(CENTER_KEY);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
{
    paintGreetings(savedUserName);
}