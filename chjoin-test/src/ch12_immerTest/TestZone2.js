// immer 모듈 가져오기
import { produce } from "immer";

import React from "react";

const TestZone2 = () => {
  const array = {
    class: {
      deep404: {
        inside: 3,
        sampleArray: [2, 3, 4],
      },
      middle: 2,
    },
    end: 5,
  };

  const sampleData = [{ id: 1, name: "lhs", age: "" }];

  // 기본 문법 살펴보기.
  // produce ( 원본 데이터, 변경할 업데이트 함수)
  const nextState = produce(array, (draft) => {
    // 변경하고 싶은 값 변경하기.
    draft.class.deep404.inside = 30000;
  });

  // 데이터 추가하기.
  const nextState2 = produce(array, (draft) => {
    draft.class = { name: "lhs" };
  });

  // 데이터 추가하기 2.
  const nextState3 = sampleData(array, (draft) => {
    draft.push = { id: 2, name: "lhs2", age: 31 };
  });

  console.log("불변성 유지 하면서 업데이트하기");
  console.log("nextState.class.deep404.inside 의 값: ");
  console.log(nextState.class.deep404.inside);
  console.log(nextState);
  console.log(nextState2);
  return (
    <div>
      <h1>결과 뷰: {nextState.class.deep404.inside}</h1>
    </div>
  );
};

export default TestZone2;
