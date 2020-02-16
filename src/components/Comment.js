import React, { Component } from 'react'

class Comment extends Component {
  componentDidMount() {
    this.setState({ newValue: this.props.msg })
  }

  state = {
    editMode: false,
    newValue: ''
  }

  handleEdit = () => {
    this.setState({ editMode: true })
  }

  completeEdit = () => {
    this.setState({ editMode: false, newValue: this.refs.editInput.value })
  }

  render() {
    return !this.state.editMode ? (
      <div>
        <span className="date">{this.props.date}</span>
        <span className="comment">{this.state.newValue}</span>
        <div className="buttons">
          <button
            className="btn edit"
            onClick={() => { this.handleEdit() }}
          >
            <code>edit</code>
          </button>
          <button
            className="btn delete"
            onClick={() => { this.props.delete(this.props.id) }}
          >
            <code>delete</code>
          </button>
        </div>
      </div>
    ) : (
        <div>
          <span className="date">{this.props.date}</span>
          <input
            className="comment-edit"
            type="text"
            ref="editInput"
            defaultValue={this.state.newValue}
          />
          <button
            className="btn regular"
            onClick={this.completeEdit}>
            <code>save</code>
          </button>
          <div className="buttons">
            <button
              disabled
              className="btn edit"
              onClick={() => { this.handleEdit() }}
            >
              <code>edit</code>
            </button>
            <button
              disabled
              className="btn delete"
              onClick={() => { this.props.deleteFoo(this.props.id) }}
            >
              <code>delete</code>
            </button>
          </div>
        </div>
      )
  }
}

export default Comment

