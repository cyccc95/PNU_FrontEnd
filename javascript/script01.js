// 기존 함수 선언 방식
// function print(){
//   console.log("버튼 클릭");
// }

// ES6+ : arrow function
const print = (btnNum) => {
  console.log(`버튼${btnNum} 클릭`);
}

// 변수
const x = 100;
// x += 1;
let y = 200;
y += 1; 
console.log(x);
console.log(y);

document.addEventListener("DOMContentLoaded", ()=>{
  /* 요소 생성 */
  // let createBtn = document.createElement("button");
  // document.getElementById("btns").append(createBtn);

  /** 요소 찾기 HTMLCollection */ 
  // const btn = document.getElementsByTagName("button");
  // console.log(btn);

  /** 요소 찾기 NodeList */
  const btn = document.querySelectorAll('button');
  console.log(btn); 

  /** 반복문 for */
  // for (let i = 0; i < btn.length; i++) {
  //   btn[i].innerHTML = `my Button ${i+1}`;
  //   console.log(btn[i]);
  // }

  /** 반복문 for in : object의 key 값 가져옴 */
  // for (let i in btn) {
  //   console.log(i)
  // }

  /** 반복문 for each : 메소드형식이라 중간에 종료x */
  // btn.forEach((item)=>{
  //   console.log(item);
  // })
  // btn.forEach((item, idx)=>{
  //   console.log(`${idx} : ${item.innerHTML}`);
  // })

  /** 반복문 for of : break 가능*/
  for(let item of btn){
    console.log(item);
  }
  for(let [idx, item] of btn.entries()){
    console.log(`${idx} : ${item.innerHTML}`);
    break;
  }
})
