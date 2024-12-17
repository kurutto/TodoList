import Button from "./Button";

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="ui grid"
          style={{ borderBottom: "dotted 1px #ccc" }}
        >
          <div className="ui list column ten wide">
            <div className="item">ID:{todo.id}</div>
            <div className="item">タイトル：{todo.title}</div>
            <div className="item">ステータス：{todo.status}</div>
            <div className="item">詳細：{todo.detail}</div>
          </div>
          <div
            className="column six wide"
            style={{ alignContent: "center", textAlign: "right" }}
          >
            <Button
              color="secondary"
              text="削除"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
