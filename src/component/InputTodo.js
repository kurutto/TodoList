import React, { useState } from "react";
import Button from "./Button";
import InputText from "./InputText";
import Radio from "./Radio";
import Textarea from "./Textarea";

const InputTodo = ({
  createTodoList,
  editTodoList,
  editId,
  editTitle,
  editStatus,
  editDetail,
}) => {
  const [title, setTitle] = useState(editTitle || "");
  console.log(title);
  const [status, setStatus] = useState(editStatus || 0);
  const statusItems = ["未着手", "進行中", "完了"];
  const [detail, setDetail] = useState(editDetail || "");
  const onSubmit = (e) => {
    e.preventDefault();
    createTodoList ? createTodoList(title, statusItems[status], detail) : editTodoList(editId, title, statusItems[status], detail);
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
            defaultValue={editTitle || title}
          />
        </div>
        <div className="field">
          <label htmlFor="status">ステータス</label>
          <div>
            {statusItems.map((statusItem, idx) => (
              <div key={idx}>
                <Radio
                  label={statusItem}
                  name="status"
                  value={idx}
                  checked={editStatus ? editStatus : status === idx}
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
            defaultValue={editDetail}
          />
        </div>
        <div className="ui two column centered grid">
          <div className="column">
            {createTodoList ? (
              <Button type="submit" text="送信" color="primary" width="fluid" />
            ) : (
              <Button type="submit" text="保存" width="fluid" />
            )}
          </div>
        </div>
      </form>
    </>
  );
};
export default InputTodo;
