
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 폭탄을 만들 랜덤수
let randomNum;

// 폭탄섞기 함수
const boxShuffle = () => {
    shuffleFlag = true; // 폭탄섞기 누르면 true
    document.querySelector('#msg').innerHTML = ""; // 버튼 밑의 메세지 모두 지움
    randomNum = Math.floor(Math.random()*9); // 0 ~ 8 랜덤수 생성
    num[randomNum] = 1; // num 배열의 램덤수 index에 폭탄 생성
    cnt = 0; // 몇개의 박스를 선택했는지 세는 cnt 초기화
    for(let i = 0; i < 3; i++){ // 박스들 모두 초기화
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
    if(shuffleFlag == false){ // 폭탄섞기를 안했으면 실행
        document.querySelector('#msg').innerHTML = "폭탄섞기를 해주세요";
    } else { // 폭탄섞기 하고 나서 실행
        if(cnt == 8){ // 선택한 박스가 8개이면 실행(성공한거임)
            document.querySelector(`#box${id}`).innerHTML = '<img src="./images/hart.png">'; // 마지막 박스 이미지 하트
            document.querySelector('#msg').innerHTML = "성공"; // 버튼 밑에 성공 메세지 출력
           
        } else { // 8개를 성공하기 전까지 실행
            if(id == randomNum + 1){ // 누른 박스가 폭탄이면
                document.querySelector(`#box${id}`).innerHTML = '<img src="./images/boom.png">'; // 폭탄 이미지
                document.querySelector('#msg').innerHTML = "실패"; // 버튼 밑에 실패 메세지 출력
                for(let i = 0; i < 9; i++){ // 폭탄을 눌러서 실패하면 모든 박스의 onclick 이벤트 제거
                    document.querySelector(`#box${i+1}`).onclick = null;
                }
            } else{ // 누른 박스가 폭탄이 아니면
                document.querySelector(`#box${id}`).innerHTML = '<img src="./images/hart.png">'; // 하트 이미지
                document.querySelector(`#box${id}`).onclick = null; // 누른 박스의 onclick 이벤트 제거
                cnt++; // 누른 박스 개수 세는 cnt +1
            }
        }
        
    }

    
    
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});