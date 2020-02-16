const initState = {
  commentsList: [],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_THE_COMMENT':
      return {
        ...state,
        commentsList: [...state.commentsList, action.text].sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()).reverse()
      }
    case 'DELETE_THE_COMMENT':
      return {
        ...state,
        commentsList: state.commentsList.filter((el => el.id !== action.id))
      }
    default:
      return state;
  }
}

export default rootReducer