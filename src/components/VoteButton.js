import {React, useState} from "react";


function VoteButton({upvotes, downvotes}){
  const [upvote , setUpvotes] = useState(upvotes)
  const [downvote , setDownvotes] = useState(downvotes)

  function handleUpvote() {
    let currentCount = upvote + 1
    setUpvotes((currentCount))
  }

  function handleDownvote(){
    setDownvotes((downvote) => downvote + 1)
  }

return (<div>
  <button type="button" onClick={handleUpvote}>{upvote} 👍</button>
  <button type="button" onClick={handleDownvote}>{downvote} 👎</button>
</div>)
}

export default VoteButton;