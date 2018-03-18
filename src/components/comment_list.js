import React, { Component } from 'react';


const CommentList = (props) => {
  const comment = props.comments.map( comment => {
      return (
        <li 
        className = "comment-list"
        >{comment}</li>
      )
  });

    return(
      <ul>
        {comment}
      </ul>
    );
  }

  export default CommentList