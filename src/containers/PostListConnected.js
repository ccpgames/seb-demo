import { connect } from 'react-redux'

import { apiFetch } from './actions'

import PostList from '../components/PostList'

const mapStateToProps = (state, ownProps) => ({ // eslint-disable-line
  data: state.posts.data,
  fetching: state.posts.fetching,
})

const mapDispatchToProps = (dispatch, ownProps) => ({ // eslint-disable-line
  fetchData: () => { dispatch(apiFetch()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
