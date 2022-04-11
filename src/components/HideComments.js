import React from "react";

function HideComments({onToggle, toggle}) {

  return (<div>
    <br></br>
    <button type="button" onClick={onToggle}>{toggle ? "Hide Comments" : "Show Comments"}</button>
    <br></br>
    <br></br>
  </div>)
}

export default HideComments;