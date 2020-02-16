export const addCommentAction = (text) => {
  return {
    type: 'ADD_THE_COMMENT',
    text
  }
}

export const deleteCommentAction = (id) => {
  return {
    type: 'DELETE_THE_COMMENT',
    id
  }
}