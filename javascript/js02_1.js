// const show = () => {
//   console.log("show : arrow function");

//   const msgId = document.querySelector('#msg');

//   let newDiv = '';
//   for(let i = 0; i < 6; i++){
//     newDiv += `<div class="divMsg" id="divMsg${i+1}">${i+1}</div>`
//   }

// }
// 함수는 const로만, let x


// 랜덤 주사위 굴리기
// let randomNum = Math.floor(Math.random()*6)+1;

//   newDiv = `<div id="diceImg"><img src="../image/${randomNum}.png"></div>`
//   msgId.innerHTML = newDiv;


/** DOM 요소가 생성된 후에 실행 */
document.addEventListener("DOMContentLoaded", () => {

})

const getAnswer = (event) => {
  const value = event.target.value; // 선택한 눈
  const btn = document.querySelector('#btn');
  const formSection = document.querySelector('#formSection');
  const diceSection = document.querySelector('#diceSection');
  const answer = document.querySelector('#answer');

  let randomNum = Math.floor(Math.random()*6)+1; // 1~6 랜덤 정수 생성
  
  formSection.style.display = 'none'; 
  answer.style.display = 'flex';
  diceSection.innerHTML = `<div><img src="../image/${randomNum}.png"></div>`;
  if(value == randomNum){
    answer.innerHTML = `<div><img src="../image/o.png"></div>`;
  } else {
    answer.innerHTML = `<div><img src="../image/x.png"></div>`;
  }
  btn.innerHTML = '한번 더?';
  
}

const show = () => {
  const btn = document.querySelector('#btn');
  const formSection = document.querySelector('#formSection');
  const diceSection = document.querySelector('#diceSection');
  const answer = document.querySelector('#answer');

  let form = ``;
  for(let i = 0; i < 6; i++){
    form += `
    <div class="diceNum">
      <label for="d${i+1}">${i+1}</label>
      <input type="radio" name="diceNum" id="d${i+1}" value="${i+1}" onclick="getAnswer(event)">
    </div>
    `;
  }
  // 처음 버튼 한번 누르면 나옴
  btn.innerHTML = '고르셈'; 
  formSection.innerHTML = `<form>${form}</form>`;

  // 결과 화면에서 버튼 한번 더 누르면 실행
  if(formSection.style.display == 'none'){
    formSection.style.display = 'flex';
    answer.style.display = 'none';
    diceSection.innerHTML = '';
    
  }
  
}