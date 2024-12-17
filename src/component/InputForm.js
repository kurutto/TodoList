import React, { useEffect, useState } from "react";
import Button from "./Button";
import InputText from "./InputText";
import Radio from "./Radio";
import Textarea from "./Textarea";
import TodoList from "./TodoList";

const InputTodo = ({ createTodoList }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(0);
  const statusItems = ["未着手", "進行中", "完了"];
  const [detail, setDetail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    createTodoList(title, statusItems[status], detail);
    setTitle("");
    setStatus(0);
    setDetail("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="title">タイトル</label>
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </div>
        <div className="field">
          <label htmlFor="status">ステータス</label>
          <div>
            {statusItems.map((statusItem, idx) => (
              <div key={idx}>
                <Radio
                  label={statusItems[idx]}
                  name="status"
                  value={idx}
                  checked={status === idx}
                  onClick={(e) => setStatus(parseInt(e.target.value))}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="detail">詳細</label>
          <Textarea
            id="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className="ui two column centered grid">
          <div className="column">
            <Button type="submit" text="送信" color="primary" width="fluid" />
          </div>
        </div>
      </form>
    </>
  );
};
export default InputTodo;
