// const clock = document.querySelector("h2#clock");

// 1. interval
// function sayHello() {
//     console.log("hello");
// }

// 5초마다 sayHello()가 실행됨.
// setInterval(sayHello, 5000);

// 2. timeout, 5초뒤에 한번 실행됨
// setTimeout(sayHello, 5000);

// seconds 1~9초를 2자리로 나타내고 싶을때
// str이 항상 적어도 2개의 문자를 가져야 함.
// str에서 사용할 수 있는 padStart()를 사용하면 됨.
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // 문자길이 2 , start에 붙을 문자열은 "0"
    const minites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minites}:${seconds}`;
}

getClock();// 없으면 1초 후에 시간을 보여주므로 웹사이트가 로드되자마자 바로 시간 보이게 해줌.
setInterval(getClock, 1000); 


