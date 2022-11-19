import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageElement = props.dialogsPage.newMessageText;

  let addMessage = () => {
    props.sendMessage();
  };

  let onChatChange = (e) => {
    let messageText = e.target.value;
    props.updateChatMessage(messageText);
  };

  return (
    <div className={c.dialogs}>
      <ul className={c.dialogsItems}>{dialogsElements}</ul>
      <div className={c.messages}>{messagesElements}</div>
      <p>New Message</p>
      <div>
        <textarea
          value={newMessageElement}
          onChange={onChatChange}
          placeholder="Enter your message"
        ></textarea>
        <div>
          <button onClick={addMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
