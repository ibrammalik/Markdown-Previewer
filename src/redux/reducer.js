import placeholder from "./placeholder";

const CHANGE = "CHANGE";
const SWITCH_EDITOR = "SWITCH_EDITOR";
const SWITCH_PREVIEWER = "SWITCH_PREVIEWER";

const initialState = {
  editorValue: placeholder,
  isShowPreviewer: true,
  isShowEditor: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        editorValue: action.payload,
      };
    case SWITCH_EDITOR:
      return {
        ...state,
        isShowEditor: true,
        isShowPreviewer: false,
      };
    case SWITCH_PREVIEWER:
      return {
        ...state,
        isShowPreviewer: true,
        isShowEditor: false,
      };
    default:
      return state;
  }
};

export default reducer;
