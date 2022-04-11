import {React, useState} from "react";
import video from "../data/video.js";
import Header from "./Header.js";
import HideComments from "./HideComments.js";
import Comments from "./Comments.js";

function App() {

  const [toggle, setToggle] = useState(true)
  
  function handleToggle(){
    console.log("toggle clicked")
    setToggle(() => !toggle)
  }

  return (
    <div className="App">
      <iframe
        width="743"
        height="420"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header {...video}/>
      <HideComments onToggle={handleToggle} toggle={toggle}/>
      <hr></hr>
      <Comments {...video} toggle={toggle}/>
    </div>
  );
}

export default App;
