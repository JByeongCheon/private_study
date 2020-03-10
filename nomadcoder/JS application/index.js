
function handleResize(event){
    console.log(handleResize)
}
window.addEventListener("resize",handleResize) //이벤트를 대기하다가 발생하면 handle함수 실행

function handleClick(){ //클릭하면 색 바뀜
    title.style.color='red';
}
title.addEventListener('click',handleClick);