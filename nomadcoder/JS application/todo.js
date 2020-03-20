const toDoform = document.querySelector('.js-toDoForm'),
    toDoinput = toDoform.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)) //object를 string으로 바꿈

}


function handleSubmuit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    paintToDO(currentValue);
    toDoinput.value  = "";
}

function paintToDO(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button')
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = 'x';
    delBtn.addEventListener('click',deleteToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    
    toDoList.appendChild(li);

    const toDoObj ={
        text :text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(toDos);

}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ //중요하니까 기억하기
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}

function filterFn(toDo){
    return toDo.id === 1

}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){ //중요하니까 기억하기
            paintToDO(toDo.text);
        })
    }
}


function init(){
    loadTodos();
    toDoform.addEventListener('submit',handleSubmuit);
     
}

init();