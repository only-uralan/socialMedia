const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_CHAT_MESSAGE = "UPDATE-CHAT-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "See ya" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
  dialogs: [
    { id: 1, name: "Arslan" },
    { id: 2, name: "Alma" },
    { id: 3, name: "Baiyr" },
    { id: 4, name: "Nimgir" },
    { id: 5, name: "Sergey" },
    { id: 6, name: "Andrey" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHAT_MESSAGE:
      return { ...state, newMessageText: action.body };
    case SEND_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const SendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateChatMessageActionCreator = (body) => ({
  type: UPDATE_CHAT_MESSAGE,
  body: body,
});

export default dialogsReducer;
