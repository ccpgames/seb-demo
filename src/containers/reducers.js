import * as actions from './actions'

const postListInit = {
  data: [],
  fetching: false,
}

export const posts = (state = postListInit, action) => {
  switch (action.type) {
    case actions.API_FETCH_START: {
      return {
        ...state,
        fetching: true,
      }
    }
    case actions.API_FETCH_SUCCESS: {
      return {
        ...state,
        data: action.data,
        fetching: false,
      }
    }
    case actions.API_FETCH_FAILURE: {
      return {
        ...postListInit,
        error: action.error,
        fetching: false,
      }
    }
    default: {
      return state
    }
  }
}
