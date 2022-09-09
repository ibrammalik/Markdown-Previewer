import { marked } from "marked";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Previewer() {
  const editorValue = useSelector((state) => state.editorValue);

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div id="previewer-container" className="h-screen">
      <div id="previewer-head">previewer</div>
      <div
        id="previewer"
        className="prose "
        dangerouslySetInnerHTML={{
          __html: marked(editorValue, { renderer: renderer }),
        }}
      ></div>
    </div>
  );
}

export default Previewer;

// useEffect(() => {
//   console.log(editorValue);
//   const previewer = document.getElementById("previewer");
//   previewer.innerHTML = marked.parse(editorValue);
// }, [editorValue]);
