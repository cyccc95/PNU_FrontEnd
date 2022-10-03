
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 폭탄을 만들 랜덤수
let randomNum;

// 폭탄섞기 함수
const boxShuffle = () => {
    shuffleFlag = true;
    document.querySelector('#msg').innerHTML = "";
    randomNum = Math.floor(Math.random()*9); // 0 ~ 8
    num[randomNum] = 1;
    selNum = [];
    cnt = 0;
    for(let i = 0; i < 3; i++){
        document.querySelectorAll('.boardRow')[i].innerHTML = `
            <div class="boardBox" id="box${3*i+1}" onclick="show(${3*i+1})">${3*i+1}</div>
            <div class="boardBox" id="box${3*i+2}" onclick="show(${3*i+2})">${3*i+2}</div>
            <div class="boardBox" id="box${3*i+3}" onclick="show(${3*i+3})">${3*i+3}</div>
        `;
    }
    
    console.log(randomNum)
}

// 박스 선택 함수
const show = (id) => {
    if(shuffleFlag == false){
        document.querySelector('#msg').innerHTML = "폭탄섞기를 해주세요";
    } else {
        if(selNum[id-1] == null && cnt == 8){
            document.querySelector(`#box${id}`).innerHTML = '<img src="./images/hart.png">';
            document.querySelector('#msg').innerHTML = "성공";
           
        } else {
            if(id == randomNum + 1){
                document.querySelector(`#box${id}`).innerHTML = '<img src="./images/boom.png">';
                document.querySelector('#msg').innerHTML = "실패";
                for(let i = 0; i < 9; i++){
                    document.querySelector(`#box${i+1}`).onclick = null;
                }
            } else{    
                document.querySelector(`#box${id}`).innerHTML = '<img src="./images/hart.png">';
                selNum[id-1] = 1;
                cnt++;
            }
        }
        
    }

    
    
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});