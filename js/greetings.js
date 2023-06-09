
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

// 일반적으로 str만 포함된 변수는 대문자로 표기하고 str저장할 때 사용,(중요한 정보가 아닌것들)
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// Login submits & A key Stores in a localstorage
function onLoginsubmit(event) {
    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지 저장(검사창) 
    paintGreetings(username);
}
// loginForm.addEventListener("submit", onLoginsubmit);
// onLoginsubmit(info) 브라우저는 위를 실행시킬 때 어떠한 정보(info)도 같이 넘겨줌. 즉, onLoginsubmit()에 인수를 넣을 수 있다.

// Paint greetings on window
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit); // 만약 로컬스토리지에 아무것도 없으면 hidden 제거한 후 로그인폼보이게하고, submit을 listen하도록 함수호출한다.
} else {
    paintGreetings(savedUsername);
}
