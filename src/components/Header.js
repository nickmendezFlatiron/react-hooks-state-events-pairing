import React from "react";
import VoteButton from "./VoteButton";

function Header({title , views , createdAt, upvotes , downvotes}){
  return (
  <div>
    <h2>{title}</h2>
    <p>{views} Views | Uploaded {createdAt}</p>
    <VoteButton upvotes={upvotes} downvotes={downvotes} />
  </div>)
}

export default Header;