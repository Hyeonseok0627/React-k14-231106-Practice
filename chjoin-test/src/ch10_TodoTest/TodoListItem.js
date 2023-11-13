import React from "react";

// https://react-icons.github.io/react-icons/search?q=checkbox
// https://react-icons.github.io/react-icons/search?q=remove
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

// css 파일을 분리해서 작업하지만,
// 해당 컴포넌트 내부에서 한번에 css 작업을 같이 하는 경우가 많음.
import styled from "styled-components";

// 작업 순서
// 1) TodoListItemCss , 2)CheckboxCss 3) TextCss 4)RemoveCss

// 컴포넌트 내부에, 각 요소에 css 작업 해보기.

const TodoListItemCss = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* 짝수 번째 자식 요소의 배경색 지정  & : 현재 본인 요소, div */
  &:nth-child(even) {
    background: #f8f9fa;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;
const CheckboxCss = styled.div``;
const TextCss = styled.div``;
const RemoveCss = styled.div``;

const TodoListItem = () => {
  return (
    <TodoListItemCss>
      <CheckboxCss>
        <MdCheckBoxOutlineBlank />
        <TextCss>샘플 할일</TextCss>
      </CheckboxCss>
      <RemoveCss>
        <MdRemoveCircleOutline />
      </RemoveCss>
    </TodoListItemCss>
  );
};

export default TodoListItem;
