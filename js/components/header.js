import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

const headerStyle = {
  height: '50px',
  background: 'rgb(253,131,32)',
  paddingTop: '12px',
  boxSizing: 'border-box',
  paddingLeft: '18px',
}

const headerLink = {
  fontWeight: 'bold',
  color: 'white',
  textShadow: '0px 1px black',
  textDecoration: 'none'
}

const ycombLogo = {
  display: 'inline-block',
  border: '2px solid white',
  paddingLeft: '4px',
  paddingRight: '4px',
  position: 'relative',
  top: '1px',
  marginRight: '7px'
}

class Header extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        <div style={headerStyle}>
          <Link to={`/`} key={`titleLink`} style={headerLink}><span style={ycombLogo}>Y</span>Hacker News</Link>
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
