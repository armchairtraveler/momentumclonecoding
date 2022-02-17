const clock = document.querySelector("h2#clock"); // h2#clock 또는 #clock
const today = document.querySelector(".date-today");

function getClock() {
    const date = new Date(); // 현재 시각 생성 (new 연산자)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    const years = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    const day = date.getDay();
    const dayOfWeek = ["일","월","화","수","목","금","토"];
    today.innerText = `${years}년 ${months+1}월 ${days}일 (${dayOfWeek[day]})`
} 

getClock();
setInterval(getClock, 1000);