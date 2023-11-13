import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

// 전체 리스트 부분만 css 작업. TodoListCss
const TodoListCss = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

// 부모에서 전달한 props 속성을, 자식 컴포넌트에서 가져오기
{
  /* <TodoList todos={todos} /> */
}
// 제거하는 함수를 전달 받아서, 사용하기.
{
  /* <TodoList todos={todos} onRemove={onRemove} /> */
}

// 체크하는 함수를 전달 받아서, 사용하기.
{
  /*      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> */
}
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoListCss>
      {/* 부모에서 전달받은 데이터를 사용해보기 */}
      {todos.map((todo) => (
        // TodoList 부모 컴포넌트에서, 다시, 자식 컴포넌트인 TodoListItem에게 props로 전달 중.
        // todo 속성과, key 속성을 전달함.
        // 목록요소가 출력 시, 반드시, key 를 명시해야함, 그래야 오류가 없고, 속도가 빠름.

        // TodoMain -> TodoList -> TodoListItem 에게, 지우는 기능의 함수를 전달. onRemove={onRemove} , 매번 이렇게 계속 드릴링하면서 props로 함수를 전달하면 계층을 많이 거치는 것이라 복잡도 올라감
        // 이래서, 이를 해결하기 위해 context api를 써서 전역으로 함수를 걸어놓고 컴포넌트들이 바로 함수를 받아와서 사용하도록 만듦
        // TodoMain -> TodoList -> TodoListItem 에게, 체크한는 기능의 함수를 전달. onToggle={onToggle}
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem /> 
      자식에서, 더미 데이터 직접 만들어서 사용했다면
      */}
    </TodoListCss>
  );
};

export default TodoList;
