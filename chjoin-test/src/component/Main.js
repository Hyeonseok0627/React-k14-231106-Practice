// Main 임시 페이지
// rsc 기본 세팅

import React from "react";
// yarn add react-router-dom 로 설치(그래야 import 가능)
// npm add react-router-dom 로 설치
// 라우팅 모듈, 도구 설치.
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

// styled-component, 컴포넌트에서 좀더 편하게 css 작업하는 모듈.
// yarn add styled-components
// npm add styled-components
// 확장팩: styled-components

const Main = () => {
  // useNavigate 라는 훅스(hooks)를 이용해서, 페이징하기..
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인 화면입니다.</h1>
      {/* join 컴포넌트로 이동하는 버튼 하나 추가 */}
      {/* 이벤트 핸들러인 onClick에선 화살표함수를 사용해야함 */}
      {/* <Button title="회원가입 이동" type="primary" onClick={navigate("/join")}> : 잘못된 표현 */}
      <Button
        title="회원가입 이동"
        type="primary"
        onClick={() => {
          navigate("/join");
        }}
      >
        회원가입 이동
      </Button>
      <br />
      <br />
      <Button
        title="mycount 이동"
        type="primary"
        onClick={() => {
          navigate("/mycount");
        }}
      >
        mycount 이동
      </Button>
    </div>
  );
};

export default Main;
