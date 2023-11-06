import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // const name = "Reuse Book";
  // return (
  //   <div>
  //     방문해주셔서 감사합니다, <b>react</b>
  //     <h1>해당 사이트는 중고도서 거래 플랫폼입니다. {name}</h1>
  //   </div>
  // );

  // const name = "당근마켓";
  // return <div>{name === "당근마켓1" ? <h2>딩동댕</h2> : <h2>땡!!</h2>}</div>;

  // const number = 0;
  // return <div>{number && <h2>당근마켓이네!</h2>}</div>;

  // const name = "undefined";
  // return name || "값이 undefined입니다.";

  const name = "Apple Store";
  return (
    <div style={{ backgroundColor: "black", color: "white", fontSize: "60px" }}>
      {name}
      <div className="reactPractice">Samsung Store</div>
    </div>
  );
}

export default App;
