import React from 'react';
import { Component } from 'react';
import CommentBox from './comment_box'
import CommentList from './comment_list'

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      comments : ["a","b"],
    }
  }

  commentSubmit(comment){
    this.setState({
      comments : this.state.comments.concat(comment),
    });
  }
  
  render() {
    const commentSubmit = (comment) => {this.commentSubmit(comment)}
    return (
      <div>
         <CommentBox 
         onCommetSubmit = {commentSubmit}
         comments = {this.state.comments}
         />
         <CommentList 
         comments = {this.state.comments}  />
      </div>  
    );
  }
}
