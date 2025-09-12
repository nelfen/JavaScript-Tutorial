const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos =[];

function deleteTodo(event) {
    const li = event.target.parentElement;  
    //리스트마다 있는 버튼을 눌렀을때 그 버튼의 부모 li가 무엇인지 판별해주는 코드
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));  
    //todo에 존재하는 모든아이디들을 li.id와 같지 않은지 비교(다르다면 True반환, 같다면 False반환, 즉 False값 삭제)
    //todo = 코드를 새로 짜면서 임의로 생성한 변수, 이전의 변수와 아무런 상관 x, 다른 문자로 바꿔도 상관 x
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos값을 JSON 형식으로 변환하여 LocalStorage에 저장
}

function paintToDo(newTodo) {
    //여기서 사용된 newTodo는 ToDoSubmit function에서 받은 newTodoObj을 저장하는 변수이름일뿐 다른값이어도 상관 x
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);   //li변수 안에 span태그를 자식 태그로 넣는 코드
    li.appendChild(button);
    toDoList.appendChild(li);   //toDoList(ul)안에 li태그를 자식 태그로 넣는 코드
}

function ToDoSubmit(event) {
    event.preventDefault(); //Submit을 억제하여 페이지가 새로고침 되는것을 막아줌
    const newTodo = toDoInput.value;    //input을 통해 받은 값을 newTodo라는 변수에 저장
    toDoInput.value = "";   //변수를 입력 받은 후에 입력창을 비워줄 코드
    const newTodoObj = {
        text: newTodo,  //input으로 받은 newtodo값
        id: Date.now(), //랜덤으로 생성되는 id값
    }
    toDos.push(newTodoObj); //toDos 배열에 newTodoObj값 추가
    paintToDo(newTodoObj);  //paintTodo Function으로 newTodoObj값 전달
    saveToDos();    //저장
}

toDoForm.addEventListener("submit", ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

 if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //Json값으로 변환된 savedToDos값을 다시 JS형식으로 변환
    toDos = parsedToDos;    //이 코드가 없으면 이전 섹션에서 저장된 코드를 불러오지 못하고 사라지게 됨
    parsedToDos.forEach(paintToDo); //foreach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
 }