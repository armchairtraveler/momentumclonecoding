const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = []; // Database 역할

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // local storage에 toDos를 string 형식으로 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 사용자가 누른 X button의 parent 지정
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // X button에 대응되는 li를 제외한 li만 남김
    saveToDos();
}

function strikeThrough(event) {
    event.target.parentElement.classList.toggle("cancel");
}

function paintToDo(newToDo){
    const li = document.createElement("li"); // li tag 생성
    li.id = newToDo.id; // 입력 시간을 기준으로 생성된 id 값을 li에 배정
    const span = document.createElement("span"); // span tag 생성
    span.innerText = newToDo.text; // 생성된 span tag에 input value(newToDo) 입력
    const vButton = document.createElement("button");
    vButton.innerText = "✔";
    vButton.addEventListener("click", strikeThrough);
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(vButton);
    li.appendChild(span); // 생성된 span tag를 li tag의 child로 위치
    li.appendChild(button); //생성된 button tag를 li tag 의 child로 위치
    toDoList.appendChild(li); //생성된 li tag를 toDoList(ul tag의 variable)의 child로 위치
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newToDo = toDoInput.value; // input value 저장
    toDoInput.value = ""; // input value 초기화 (newToDo는 유지됨)
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // 입력 시간을 id 값으로 생성 (Date.now(); : 현재 시간)
    }
    toDos.push(newToDoObj); // input value를 toDos array에 입력
    paintToDo(newToDoObj); // input value를 paintToDo 함수에 입력
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // local storage에 저장된 todos 불러오기
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string 형태로 저장된 array를 실제 array로 변환
    toDos = parsedToDos; // toDos array를 미리 저장된 array 값으로 지정 (To-Do를 새로 추가하여도 이전 값 유지)
    parsedToDos.forEach(paintToDo); // 미리 저장된 array의 각 element에 대하여 paintToDo 함수 실행
}