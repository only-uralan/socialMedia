import React from "react";
import Dialogs from "./Dialogs";
import {
  SendMessageActionCreator,
  updateChatMessageActionCreator,
} from "./../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateChatMessage: () => {
      dispatch(SendMessageActionCreator());
    },
    sendMessage: (messageText) => {
      dispatch(updateChatMessageActionCreator(messageText));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
