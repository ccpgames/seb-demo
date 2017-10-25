import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'

import { withStyles } from 'material-ui/styles'
import FormStyle from './FormStyle'

const PostList = (props) => {
  const {
    classes,
    data,
    fetchData,
    fetching,
  } = props
  return (
    <div>
      <Button
        className={classes.fabButton}
        raised
        color="primary"
        onClick={() => fetchData()}
        disabled={fetching}
        >
          Fetch data
        </Button>
      <ul>
        {
          data.map((post) => {
            return (
              <li key={post.id}>
                {post.title}
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
}


export default withStyles(FormStyle)(PostList)
