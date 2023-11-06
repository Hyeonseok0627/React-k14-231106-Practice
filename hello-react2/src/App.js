// js에서  import 키워드를 사용하는데,
// 탈 웹브라우저, 즉, 로컬에서, 자바스크립트를 이용한다.
// node -> 리액트 프로젝트를 생성함 -> 그 프로젝트 내에서, 특정 기능(npm) 설치 가능.

import "./App.css";
import React from "react";
import logo from "./logo.svg";

function App() {
  // JSX 문법 모양 소개
  // return 이라는 키워드 아래에, html 태그들이 사용 되고 있음.

  // JSX 문법 구현(이렇게 쓴 것이 바벨이 알아서, JSX 문법 사용하기 전 형태로 자동 변형시켜줌)
  // return (
  //   <div>
  //     Hello, <b>react</b>
  //   </div>
  // );

  // JSX 문법 사용하기 전(일반 자바스크립트 문법)
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello",
  //   React.createElement("b", null, "react")
  // );

  // const name = "이현석";
  // return (
  //   <div>
  //     <h1>hello React {name}</h1>
  //     <h2>동작 잘하나요?</h2>
  //     <h2>동작 잘하나요</h2>
  //   </div>
  // );

  // if 대신에 jsx 에서 조건부 연산자 이용.
  // const : 상수처럼 사용, 안드로이드  val 개념
  // let : 변수처럼 사용, 안드로이드 var 개념
  const name = "이현석";
  // {조건식 ? (참이 실행될 문장) : (거짓이 실행될 문장)}
  return (
    <div>
      {name === "이현석" ? <h1>이현석이 맞네</h1> : <h1>이현석이 아니네</h1>}
    </div>
  );
}

export default App;
