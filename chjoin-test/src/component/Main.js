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
// 설치 후, 모듈 가져와서 사용하기.
// 공식문서

import styled from "styled-components";

// styled-component 사용해보기
// 예제
// styled. 원하는(적용하고 싶은) 태그 선택 -> `(백틱) `(백틱)으로 열고 닫고
const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const MainTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  background-color: aqua;
  text-align: center;
`;

//Wrapper 라고 해서 블록 부분 설정.
const Wrapper = styled.div`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Container 만들기.
const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-left: 20px;

  // & : 현재 태그
  // div 태그 하위의 자식 태그를 마지막 자식 태그를 제외하고
  // 각 요소의 마진 바텀을 16 px 씩 간격을 주겠다.
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  // useNavigate 라는 훅스(hooks)를 이용해서, 페이징하기..
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h1>메인 화면입니다.</h1>
        {/* css 적용하기 */}
        <Container>
          <MainTitleTextCss>styled-Components test</MainTitleTextCss>

          <MainTextCss>2번째 텍스트 효과 확인하기</MainTextCss>

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
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
