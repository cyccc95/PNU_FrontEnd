// /* 문자열 순회 */
// let s = "토마토123"
// console.log(s);

// // 문자열에서 첫번째 문자
// console.log(s[0]);
// console.log(s.charAt(0));
// console.log('-------');

// // 문자열 처음부터 끝까지 출력
// // for(let i = 0; i < s.length; i++){
// //   console.log(s.charAt(i));
// // }
// // for(let item of s){
// //   console.log(item)
// // }

// /* 실습 : 회문인지 판별 */
// let str = '토마토';
// let newStr = '';
// for(let i = str.length -1 ; i >= 0 ; i--){
//   newStr += str[i];
// }
// if(str == newStr){
//   console.log(`${str} : 회문입니다`)
// } else {
//   console.log(`${str} : 회문이 아닙니다`)
// }

/* 실습 : 문자열에 포함된 숫자의 합구하기*/
let s = "Hello 2022 JS 09!!"
let sum = 0;
for(let i = 0 ; i < s.length; i++){
  if(s[i] >= '0' && s[i] <= '9'){
    sum += parseInt(s[i]);
  }
}
console.log(sum);


/* 여러줄 문자열 저장 */
let str = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`
 
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/
let count = 0;
for(let item of str.split(' ')){
  if (item.includes('HTML')) {
    count++;
  }
}
console.log(count);

/* 문자열 슬라이싱*/
 
