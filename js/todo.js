const toDoForm = document.querySelector("#todo-form");
// const toDoInput = document.querySelector(#todo-form input) 은 아래와 동일한 코드
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list");

const TODOS_KEY = "todos"

// 값이 바뀌기 때문에 let을 사용해야함.
let toDos = [];

function saveToDos() {
    // 함수 호출될때 이미 newTodo는 array에 들어있음 (handletodosubmit에서 확인 가능)
    // JSON.stringify()는 js의 object와 array를 string으로 변환시킴
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteTodo(event) {
    // event.target은 클릭된 html의 element를 알려줌.
    // parentElement는 부모element를 알려줌(button의 부모는 li)
    const li = event.target.parentElement
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text; // 사용자가 입력한 newTodo
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span); // li안에 span을 만듦
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // newTodo라는 변수에 input값 복사하고
    toDoInput.value = ""; // enter 누르면 새로고침되어 입력한 글은 빈칸으로 채움.
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    // newTodo를 array에 저장하고 화면에 띄우고나서 로컬스토리지에 저장(saving 해줘야함.)
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 단순한 string을 array로
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // toDos가 항상 빈 array []; 다 보니 localstorage에 새로운 것만 저장이 되어서 이전에 있던 toDos를 복원할 수 있도록 함.(더 이상 빈값이 아님).
    toDos = parsedToDos;
    //  js는 텍스트(array 각각)를 paintToDo에게 전달해준다.
    // paintToDo("a"),b,c,d,e.... 이런식으로!
    parsedToDos.forEach(paintToDo);
}

