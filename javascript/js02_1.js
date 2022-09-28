const show = () => {
  console.log("show : arrow function");

  const msgId = document.querySelector('#msg');

  // let newDiv = '';
  // for(let i = 0; i < 6; i++){
  //   newDiv += `<div class="divMsg" id="divMsg${i+1}">${i+1}</div>`
  // }

}
// 함수는 const로만, let x


// 랜덤 주사위 굴리기
// let randomNum = Math.floor(Math.random()*6)+1;

//   newDiv = `<div id="diceImg"><img src="../image/${randomNum}.png"></div>`
//   msgId.innerHTML = newDiv;


/** DOM 요소가 생성된 후에 실행 */
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('#form');
  // form 안보이기
  // form.style.display = 'none';
})
