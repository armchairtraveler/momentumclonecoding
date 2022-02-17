
//HTML의 Element를 JS에서 지정하는 코드
const loginForm = document.querySelector("form#login-form");
const loginInput = document.querySelector("form#login-form input");
const greeting = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // submit 시 자동 새로고침 기능 방지 (argument: event)
    loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm 숨기기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //Local Storage에 user info 저장
    paintGreetings(username); // 새로 받아온 username 기반으로 greeting
}

function paintGreetings(username) {
    greeting.innerText = `${greetingsResult}, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const toDoForm = document.querySelector("#todo-form");
    const toDoList = document.querySelector("#todo-list");
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
} // greeting 문구 생성 및 hidden 해제 함수 (코드 반복 최소화)

function removeContent() {
    loginInput.placeholder = "";
}
function recoverContent() {
    loginInput.placeholder = "What is your name?";
}

const greetingsResult = greetings();
function greetings() {
    const now = new Date().getHours();
    if (5<= now && now <11) {
        return "Good morning";
    } else if (11<= now && now <17) {
        return "Good afternoon";
    } else if (17<= now && now <21) {
        return "Good evening";
    } else if (21<= now && now <5) {
        return "Good night";
    }
}


loginInput.addEventListener("focus", removeContent);
loginInput.addEventListener("blur", recoverContent);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) { // 로컬 저장소에 user info 없으면 form 창 hidden 해제
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { // 로컬 저장소에 user info 있으면 greeting hidden 해제
    paintGreetings(savedUsername); // 이미 있는 savedUsername 기반으로 greeting
}