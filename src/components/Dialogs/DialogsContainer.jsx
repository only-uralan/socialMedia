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
    updateChatMessage: (messageText) => {
      dispatch(updateChatMessageActionCreator(messageText));
    },
    sendMessage: () => {
      dispatch(SendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
