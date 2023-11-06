// es6, const, let 비교해보기.
// 문제점 제시.
function test() {
  var a = "hello";
  if (true) {
    var a = "hi";
    console.log(a); // 어떤 a가  출력될까? : hi가 출력
  }
  console.log(a); // 어떤 a가  출력될까? : hi가 출력(즉, js에서는 var가 지역변수로 끝나는게 아니고 전역변수로 쓰여지게되는거라 재할당이 된 것, 그래서 지역이 끝나도 계속 a= hi인 것)
  // var는 js에선 전역변수로 쓰여짐 -> 그래서, var a="hi"로 재할당 된 것이라 if{}로 지역변수 범위가 끝난 뒤에도 a=hi만 출력이 됨(자바와는 다른 개념)
  // var , 전역으로 재선언 및 재할당.
}
// 함수 사용하기.
test();

function test2() {
  let a = "hello";
  if (true) {
    let a = "hi";
    console.log(a); // 어떤 a가  출력될까? : hi가 출력
  }
  console.log(a); // 어떤 a가  출력될까? : hello가 출력
  // let , 블록 단위라서, 우리가 원래 알고 있던
  // 지역 변수의 효력범위를 못 넘어감.
}
// 함수 사용하기.
test2();
