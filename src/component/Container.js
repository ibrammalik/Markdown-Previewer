import React, { useEffect } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import { useSelector, useDispatch } from "react-redux";

function Container() {
  const dispatch = useDispatch();
  const isShowEditor = useSelector((state) => state.isShowEditor);
  const isShowPreviewer = useSelector((state) => state.isShowPreviewer);

  const switchEditor = () => {
    dispatch({
      type: "SWITCH_EDITOR",
    });
  };

  const switchPreviewer = () => {
    dispatch({
      type: "SWITCH_PREVIEWER",
    });
  };

  var x = window.matchMedia("(max-width: 768px)");
  useEffect(() => {
    var x = window.matchMedia("(max-width: 768px)");
    const editor = document.querySelector("#editor-container");
    const previewer = document.querySelector("#previewer-container");
    const editorTab = document.querySelector("#editor-tab");
    const previewerTab = document.querySelector("#previewer-tab");
    if (isShowEditor && !isShowPreviewer && x.matches) {
      editor.style.display = "block";
      previewer.style.display = "none";
      editorTab.style.color = "#2ECC71";
      previewerTab.style.color = "#CCCCCC";
    } else if (!isShowEditor && isShowPreviewer && x.matches) {
      editor.style.display = "none";
      previewer.style.display = "block";
      editorTab.style.color = "#CCCCCC";
      previewerTab.style.color = "#2ECC71";
    }
  }, [isShowEditor, isShowPreviewer, x.addListener]);

  return (
    <main id="main-container" className="h-[calc(100vh_-_46px)] ">
      <div id="tab" className="shadow-md flex flex-row lg:hidden">
        <div id="editor-tab" className="h-[50%] w-[50%] text-center border-2 py-1 font-bold" onClick={switchEditor}>
          EDITOR
        </div>
        <div id="previewer-tab" className="h-[50%] w-[50%] text-center border-2 py-1 font-bold" onClick={switchPreviewer}>
          PREVIEWER
        </div>
      </div>
      <Editor />
      <Previewer />
    </main>
  );
}

export default Container;
