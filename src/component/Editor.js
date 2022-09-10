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
    <div id="editor-container" className="h-screen lg:h-full  ">
      <div id="editor-head" className="font-bold text-center py-2 border-b-2">
        EDITOR
      </div>
      <textarea id="editor" onChange={editorChangeHandler} value={editorValue} className="max-h-[calc(100%_-_150px)] min-h-[calc(100%_-_150px)] lg:max-h-[calc(100%_-_40px)] lg:min-h-[calc(100%_-_40px)] w-full  p-5"></textarea>
    </div>
  );
}

export default Editor;
