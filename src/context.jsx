import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  TOGGLE_THEME,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  hits: [],
  query: 'chatgpt',
  page: 0,
  nbPages: 0,
  theme: 'lightTheme',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING })
    try {
      const res = await fetch(url)
      const data = await res.json()
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  const toggleTheme = (currentTheme) => {
    dispatch({ type: TOGGLE_THEME, payload: currentTheme })
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  useEffect(() => {
    document.documentElement.className = state.theme
  }, [state.theme])

  return (
    // pass entire state to context
    <AppContext.Provider
      value={{ ...state, handleSearch, handlePage, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
