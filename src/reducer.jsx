import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  TOGGLE_THEME,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    case HANDLE_PAGE:
      if (action.payload === 'increase') {
        let nextPage = state.page + 1
        nextPage = nextPage > state.nbPages - 1 ? 0 : nextPage
        return { ...state, page: nextPage }
      } else {
        let prevPage = state.page - 1
        prevPage = prevPage < 0 ? state.nbPages - 1 : prevPage
        return { ...state, page: prevPage }
      }
    case TOGGLE_THEME:
      if (action.payload === 'lightTheme') {
        return { ...state, theme: 'darkTheme' }
      } else {
        return { ...state, theme: 'lightTheme' }
      }
    default:
      throw new Error(`No matching action type: ${action.type}`)
  }
}

export default reducer
