/* 배열 선언 */
// let arr = new Array();
let arr = [];
console.log(arr);

/* 배열 추가 삭제 :뒤에서 */
arr.push('❤'); 
arr.push('👍'); 
console.log(arr);
/* 배열 추가 삭제 :앞에서 */
arr.pop();
console.log(arr);

/* 배열 순회 */
arr = ['🍕','🍔','🍗','🍜',] ;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} 
for(let item of arr){
  console.log(item);
}
/* 배열의 length 속성*/
//배열 비우기
console.log(arr.length);
arr.length = 3;
console.log(arr.length);
for(let item of arr){
  console.log(item);
}

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;
let str = String(arr);
console.log(str);
 
/* 문자열 split하면 배열반환*/
let arr2 = str.split(',');
console.log(arr2); 

/* 배열 정렬 */
let num = [1,3,5,2,4];
num.sort();
console.log(num);

/* 배열 섞기*/
const shuffle = (num) => {
  for (let i = 0; i < num.length; i++) {
    let idx1 = Math.floor(Math.random()*5);
    let idx2 = Math.floor(Math.random()*5);
  
    if(idx1 == idx2) continue;
    let temp = num[idx1];
    num[idx1] = num[idx2];
    num[idx2] = temp;
  }
  return num;
}

const shuffle2 = (array) => {
  return array.sort(() => Math.random() - 0.5);
}
console.log("-------shuffle---------")
console.log(shuffle(num));
console.log(shuffle2(num));


 
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 
let nf = num.filter( x => x > 3 );
console.log(nf);



/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

// 얕은 복사
let setC = setA;
setA[0] = 100;
console.log(setC[0]);

// 깊은 복사
let setD = [...setA];
setA[0] = 10;
console.log(setD[0]);

//합집합
let union = [...setA, ...setB]
console.log(union);

//교집합
setA = [1,2,3,4,5];
setB = [4,5,6,7,8];
let intersection = setA.filter(item => setB.includes(item))
console.log(intersection);

//차집합
let difference = setA.filter(item => !setB.includes(item))
console.log(difference);




