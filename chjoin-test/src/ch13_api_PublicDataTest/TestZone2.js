// 비동기 방식 설명 및
// setTimeout 함수 소개,
// 콜백 지옥 모양 소개,
// Promise로 계산하는 부분
// axios 진행하기.

// 비동기 vs 동기 방식 차이점.
// 동기
// 작업 순서 1)작업완료  2)작업완료  3)작업완료  작업이 있다면,
// 각 작업이 순서대로 완료되면 다음 작업을 진행함.

// 비동기
// 작업 순서 1)  2)  3) 완료되는 순서에 상관없이
// 같이 실행을 하고, 끝나는대로 알려준다.

function printHello() {
  console.log("Hello world~~~");
}

// setTimeout(콜백함수, 기다리는 시간) : 기다리는 시간 후에 콜백함수가 동작함.
// 작업 1 (3000: 3000ms)
// setTimeout(printHello, 3000);

// 작업 2
// console.log("대기중입니다.");

// 비동기방식이라 더 작업이 빠른 작업2가 나오고, 작업1이 완료됨.

// 포인트, 비동기적으로 다 같이 실행 후, 작업이 완료되는대로 호출 이용.
// ctrl + alt + n : 코드러너라는 확장팩으로 실행 중.
// 맥 : ctrl + option + n

// ===========================================================
// 콜백 함수 지옥 모양 보기.

// 이게 함수부분
// () => {
//   const result = number - 1;
//   if (callbackFunction) {
//     callbackFunction(result);
//   }
// }

function decrease(number, callbackFunction) {
  setTimeout(() => {
    const result = number - 1;
    if (callbackFunction) {
      callbackFunction(result);
    }
  }, 1000);
}

// 호출해보기.
// decrease(0, result => {
//   console.log(result)
// })

// 콜백 지옥 함수 모양 보기.
console.log("작업 시작");
decrease(0, (result) => {
  console.log(result);
  decrease(result, (result) => {
    console.log(result);
    decrease(result, (result) => {
      console.log(result);
      decrease(result, (result) => {
        console.log(result);
        console.log("작업완료");
      });
    });
  });
});

// promise로 개선하기.
