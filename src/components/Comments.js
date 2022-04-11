import React from "react";

function Comments({comments, toggle}){

  let listOfComments = comments.map(userComment => {
    const {id , user , comment} = userComment
    return( <div key={id}>
        <p><strong>{user}</strong></p>
        <p>{comment}</p>
      </div>
    )
  })


  return (<div>
    <h2>{comments.length} Comments</h2>
    {toggle ? listOfComments : false}
  </div>)
}

export default Comments;