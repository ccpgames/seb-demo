import axios from 'axios'

export const API_FETCH = 'API_FETCH'
export const API_FETCH_SUCCESS = 'API_FETCH_SUCCESS'
export const API_FETCH_FAILURE = 'API_FETCH_FAILURE'
export const API_FETCH_START = 'API_FETCH_START'

export const apiFetchSuccess = (data) => ({
  type: API_FETCH_SUCCESS,
  data: data.data,
})

export const apiFetchFailure = (error) => ({
  type: API_FETCH_FAILURE,
  error,
})

export const apiFetchStart = () => ({
  type: API_FETCH_START,
})

export const apiFetch = () => (dispatch) => {
  dispatch(apiFetchStart())
  axios
    .get('/posts')
    .then((result) => {
      dispatch(apiFetchSuccess(result))
    })
    .catch((error) => {
      dispatch(apiFetchFailure(error))
    })
}
