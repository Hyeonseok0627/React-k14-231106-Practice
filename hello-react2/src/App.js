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
  // const name = "이현석";
  // {조건식 ? (참이 실행될 문장) : (거짓이 실행될 문장)}
  // {name === "이현석2" ? <h1>이현석이 맞네</h1> : null} : 화면에 아무것도 출력 하지 않을 때
  //   return (
  //     <div>
  //       {name === "이현석2" ? <h1>이현석이 맞네</h1> : <h1>이현석이 아니네</h1>}
  //     </div>
  //   );
  // }

  // const name = "이현석";
  // const number = 0;
  // && 2가지 조건이 참이 되어야 실행이 되는데,
  // 앞에 조건이 거짓이면, 뒤에 조건을 안보면서 null로 되어 화면에 아무것도 출력을 하지않음.
  // 0은 예외적으로 앞 조건이 거짓이라해도, 0을 출력하게 됨
  // return <div>{name === "이현석2" && <h1>이현석이 맞네</h1>}</div>;
  // return <div>{number && <h1>이현석이 맞네</h1>}</div>;

  // undefined 랜더링 안하기.
  // 대책 or 연산자를 이용해서, 체크.
  // const name = undefined;
  // return name || " 값이 undefined 입니다.";

  // 인라인 스타일링 기본

  const name = "이현석";
  // 스타일 정의해서 사용했고,
  // const style = {
  //   backgroundColor: "red",
  //   color: "yellow",
  //   fontsize: "50px",
  // };
  // return <div style={style}>{name}</div>;

  // 바로 사용도 가능함.
  // return (
  //   <div style={{ backgroundColor: "red", color: "yellow", fontSize: "50px" }}>
  //     {name}
  //     <div className="reactTest">이현석2</div>
  //   </div>
  // );

  // 반드시 닫아야하는 태그, input
  return (
    <div>
      {/* JSX에서의 기본 주석의 모양 */}
      {/* IDE인 VSCode에서 주석하고 싶다. -> ctrl + / 하면 보통 자동으로 주석 처리 해줌 */}
      {/* // : 이런 주석은 그대로 표기 1 , /*:  이런 주석도 그대로 표기 2 */}
      <form>
        이름 : <br />
        <input />
        <input></input>
      </form>
    </div>
  );
}

export default App;
