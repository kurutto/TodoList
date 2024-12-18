import Button from "./Button";
import InputTodo from "./InputTodo";

const TodoList = ({ todoList, edit, deleteTodo, editTodo, editTodoList }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className={`ui ${!edit && "grid"}`}
          style={{ borderBottom: "dotted 1px #ccc" }}
        >
          <div className={`ui list ${!edit && "column ten wide"}`}>
            {edit === todo.id ? (
              <>
                <div className="item">ID:{todo.id}</div>
                <InputTodo
                  editTodoList={editTodoList}
                  editId={todo.id}
                  editTitle={todo.title}
                  editStatus={todo.status}
                  editDetail={todo.detail}
                />
              </>
            ) : (
              <>
                <div className="item">ID:{todo.id}</div>
                <div className="item">タイトル：{todo.title}</div>
                <div className="item">ステータス：{todo.status}</div>
                <div className="item">詳細：{todo.detail}</div>
              </>
            )}
          </div>
          {!edit && (
            <div
              className="column six wide"
              style={{ alignContent: "center", textAlign: "right" }}
            >
              <>
                <Button
                  color=""
                  text="編集"
                  onClick={() => editTodo(todo.id)}
                />
                <Button
                  color="secondary"
                  text="削除"
                  onClick={() => deleteTodo(todo.id)}
                />
              </>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
