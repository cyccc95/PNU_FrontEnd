// const show = () => {
//   console.log("show : arrow function");

//   const msgId = document.querySelector('#msg');

//   let newDiv = '';
//   for(let i = 0; i < 6; i++){
//     newDiv += `<div class="divMsg" id="divMsg${i+1}">${i+1}</div>`
//   }

// }
// 함수는 const로만, let x




//-------------주사위 게임 만들기-----------------//

// 필요한 공통 변수들 선언
let btn;
let formSection;
let diceSection;
let answerSection;
let count, win; // 판수, 이긴판
let level; // 승률에 따른 레벨

/** DOM 요소가 생성된 후에 실행 */
document.addEventListener("DOMContentLoaded", () => {
  btn = document.querySelector('#btn');
  formSection = document.querySelector('#formSection');
  diceSection = document.querySelector('#diceSection');
  answerSection = document.querySelector('#answerSection'); // DOM 생성 이후 각 section 찾아줌
  count = 0; // 판수 0으로 초기화
  win = 0;   // 이긴판 0으로 초기화
})

// 1번째 버튼에 달린 event
const show = () => {
  
  // 버튼 눌렀을 때 formSection에 넣어줄 html 만들기
  let form = ``;
  for(let i = 0; i < 6; i++){
    form += `
    <div class="diceNum">
      <label for="d${i+1}">${i+1}</label>
      <input type="radio" name="diceNum" id="d${i+1}" value="${i+1}" onclick="getAnswer(event)">
    </div>
    `;
  }

  // 처음 버튼 한번 누르면 실행
  btn.innerHTML = '고르셈'; 
  formSection.innerHTML = `<form>${form}</form>`;

  // 결과 화면에서 버튼 한번 더 누르면 실행
  if(formSection.style.display == 'none'){
    formSection.style.display = 'flex';
    answerSection.style.display = 'none';
    diceSection.innerHTML = '';
  }
  
}

// 숫자 골랐을 때 정답 출력하는 event
const getAnswer = (e) => {
  const value = e.target.value; // 선택한 눈의 value

  let randomNum = Math.floor(Math.random()*6)+1; // 1~6 랜덤 정수 생성
  
  formSection.style.display = 'none'; 
  answerSection.style.display = 'flex';
  diceSection.innerHTML = `<div><img src="image/${randomNum}.png"></div>`;
  
  // value와 랜덤 정수 비교해서 answer 출력
  if(value == randomNum){
    answerSection.innerHTML = `<div><img src="image/o.png"></div>`;
    count++; // 판수 +1
    win++;   // 승수 +1
  } else {
    answerSection.innerHTML = `<div><img src="image/x.png"></div>`;
    count++; // 판수 +1
  }

  btn.innerHTML = '한번 더?';
  
}


// 2번째 버튼 전적보기 event
const showRate = () => {
  const rateSection = document.querySelector('#rateSection');

  // 승률에 따라 level 나누는 계산
  if(Math.round(win/count*100) >= 70){
    level = "오.. 고수";
  } else if(Math.round(win/count*100) >= 20 && Math.round(win/count*100) < 70) {
    level = "평민";
  } else {
    level = "ㅋㅋ.. 접으셈";
  }

  // 출력할 html
  rateSection.innerHTML = `
    <div>
      ${win}승 ${count-win}패 ${Math.round(win/count*100)}% 
    </div>
    <div>
      ${level}
    </div>
  `
  rateSection.style.display = 'block';
}
