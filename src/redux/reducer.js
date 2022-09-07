const CHANGE = "CHANGE";

const initialState = {
  editorValue: "Halo",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        editorValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
