import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { deleteCommentAction } from '../actions/rootActions'

class List extends Component {

  handleDelete = (el) => {
    this.props.deleteComment(el)
  }

  render() {
    return this.props.comments.length > 0 ? (
      <ul className="comments-list">
        {this.props.comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment
                id={comment.id}
                date={comment.date}
                msg={comment.text}
                delete={this.handleDelete}
              />
            </li>
          );
        })}
      </ul>
    ) : (
        <div>
          <code>no comments yet!</code>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.commentsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(deleteCommentAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

