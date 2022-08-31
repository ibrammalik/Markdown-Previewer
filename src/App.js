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
        <textarea id="editor" onChange={editorChangeHandler} value={editorValue}></textarea>
        <div id="previewer" style={{ color: "white" }}></div>
      </header>
    </div>
  );
}

export default App;
