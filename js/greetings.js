const loginForm = document.getElementById("login-form");
loginInput = loginForm.querySelector("input"),
greeting = document.querySelector(".greeting");

const USER_LS = "currentUser"; // user in local storage
SHOWING_CN = "showing";
const HIDDEN_CLASSNAME = "hidden";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const currentValue = loginInput.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    loginForm.classList.add(SHOWING_CN);
    loginForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    loginForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
        
    } else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}

init();