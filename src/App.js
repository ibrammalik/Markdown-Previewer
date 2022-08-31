import { useEffect, useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const [editorValue, setEditorValue] = useState("Halo");

  const editorChangeHandler = (event) => {
    setEditorValue(event.target.value);
  };

  useEffect(() => {
    const previewer = document.getElementById("previewer");
    previewer.innerHTML = marked.parse(editorValue);
  }, [editorValue]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div id="editor-container">
            <div id="editor-head">Editor</div>
            <textarea id="editor" onChange={editorChangeHandler} value={editorValue}></textarea>
          </div>
          <div id="previewer-container">
            <div id="previewer-head">previewer</div>
            <div id="previewer"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
