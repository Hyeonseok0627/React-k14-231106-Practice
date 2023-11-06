// js에서  import 키워드를 사용하는데,
// 탈 웹브라우저, 즉, 로컬에서, 자바스크립트를 이용한다.
// node -> 리액트 프로젝트를 생성함 -> 그 프로젝트 내에서, 특정 기능(npm) 설치 가능.

import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // JSX 문법 모양 소개
  // return 이라는 키워드 아래에, html 태그들이 사용 되고 있음.

  // JSX 문법 구현
  // return (
  //   <div>
  //     Hello, <b>react</b>
  //   </div>
  // );

  // JSX 문법 사용하기 전(일반 자바스크립트 문법)
  return React.createElement(
    "div",
    null,
    "Hello",
    React.createElement("b", null, "react")
  );
}

export default App;
