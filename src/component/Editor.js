import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Editor() {
  const editorValue = useSelector((state) => state.editorValue);
  const setEditorValue = useDispatch();

  const editorChangeHandler = (event) => {
    setEditorValue({
      type: "CHANGE",
      payload: event.target.value,
    });
  };

  return (
    <div id="editor-container" className="h-screen">
      <div id="editor-head" className="text-1xl font-bold text-center py-2">
        EDITOR
      </div>
      <textarea id="editor" onChange={editorChangeHandler} value={editorValue} className="h-full w-full"></textarea>
    </div>
  );
}

export default Editor;
