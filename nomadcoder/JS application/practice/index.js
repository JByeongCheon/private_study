const title = document.querySelector("#title")

// function handleResize(event){
//     console.log(handleResize)
// }
// window.addEventListener("resize",handleResize) //이벤트를 대기하다가 발생하면 handle함수 실행

// function handleClick(){ //클릭하면 색 바뀜
//     title.style.color='red';
// }

// const BASE_COLOR = 'rgb(52, 73, 94)';
// const OTHER_COLOR = '#7f8c8d';


const CLICKED_CLASS = 'clicked'

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // //const currentClass = title.className;
    // if(!hasClass){
    //     //title.className = CLICKED_CLASS;
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else{//title.className =''; 
    //     title.classList.remove(CLICKED_CLASS);

        title.classList.toggle(CLICKED_CLASS); //이 한줄로 위의 줄 기능 가능 ---원리가 뭐냐 씨발
    } //toggle은 class에 cLICKED_CLASS가 있으면 remove하고 없으면 ADD한다

    //console.log(title.style.color); //클릭하면 색상값 출력
    // const currentColor = title.style.color;
    // if (currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR
    // }
    // else{
    //     title.style.color = BASE_COLOR
    // }


function init(){
    //title.style.color = BASE_COLOR;
    title.addEventListener('click',handleClick);
    //title.addEventListener('mouseenter',handleClick) //마우스가 title안으로 들어갈때
}

init();









// 문법:

// if(10 === 5){ //js는 =가 3개 와야하나다
//     console.log(
//     )
// }
// else{
//     block
// }

// const age =prompt("how age"); //prompt는 잘 쓰지 않는다.
// if(age > 19 && age < 21 || age == 33 ){ //기본적인 and or도 같다
//     console.log('you can drink')
// }

// else{
//     console.log("you cant")
// }

