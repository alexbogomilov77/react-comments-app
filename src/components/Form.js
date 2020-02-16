import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCommentAction } from '../actions/rootActions'
import logo from './../logo.svg'
import uuid from 'uuid/v1'

class Form extends Component {

  state = {
    isEnable: false,
    value: ''
  }

  //Get current time used for the list order
  getTheTime = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
  }

  handleInput = (e) => {
    if (e.target.value.length < 100 && e.target.value.length > 0) {
      this.setState({ isEnable: true })
    } else {
      this.setState({ isEnable: false })
    }
    this.setState({ value: { text: e.target.value, date: this.getTheTime(), id: uuid() } })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.value)
    this.setState({ value: { text: '' } })
    this.setState({ isEnable: false })
  }

  render() {
    return (
      <div>
        <img className="App-logo" src={logo} alt="logo" />
        <form className="type-form" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Type here"
            rows="5" cols="50"
            type="text"
            value={this.state.value.text}
            onChange={this.handleInput}>
          </textarea>
          <input
            className="btn regular submit"
            type="submit"
            disabled={!this.state.isEnable}
          />
        </form>
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
    addComment: (text) => dispatch(addCommentAction(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

