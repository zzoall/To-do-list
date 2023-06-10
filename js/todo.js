const toDoForm = document.querySelector("#todo-form");
// const toDoInput = document.querySelector(#todo-form input) 은 아래와 동일한 코드
const toDoInput = toDoForm.querySelector("input")
const toDoList= document.querySelector("#todo-list");


function deleteTodo(event) {
    // event.target은 클릭된 html의 element를 알려줌.
    // parentElement는 부모element를 알려줌(button의 부모는 li)
    const li = event.target.parentElement
    li.remove();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; // 사용자가 입력한 newTodo
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
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

