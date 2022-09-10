import { marked } from "marked";
import React from "react";
import { useSelector } from "react-redux";
import hljs from "highlight.js";

function Previewer() {
  const editorValue = useSelector((state) => state.editorValue);

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  });

  return (
    <div id="previewer-container" className="h-full border-l-2 ">
      <div id="previewer-head" className="font-bold text-center py-2 border-b-2 ">
        PREVIEWER
      </div>
      <div className="max-h-[calc(100%_-_100px)] min-h-[calc(100%_-_100px)] lg:max-h-[calc(100%_-_40px)] lg:min-h-[calc(100%_-_40px)] overflow-y-scroll border-b-2">
        <div
          id="preview"
          className="prose max-w-full m-auto p-5 "
          dangerouslySetInnerHTML={{
            __html: marked(editorValue, { renderer: renderer }),
          }}
        ></div>
      </div>
    </div>
  );
}

export default Previewer;
