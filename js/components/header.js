import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

const headerStyle = {
  height: '50px',
  background: 'orange'
}

class Header extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <div style={headerStyle}>

        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(Header)
