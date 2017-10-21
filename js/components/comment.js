import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

const styleName = {
  marginLeft: '20px',
  paddingLeft: '10px',
  marginTop: '10px',
  fontFamily: 'Verdana',
  fontSize: '12px',
  // marginBottom: '-25px'
}

const commentStyle = {
  borderLeft:'1px solid rgba(185, 185, 167, 0.55)',
  marginLeft: '7px',
  paddingLeft: '10px',
  marginTop: '6px'
}

const commentWrapper = {
  // marginTop: '20px',
  display: 'block',
  position: 'relative',
  // marginBottom : '30px'
}

const commentAuthor = {
  color: 'rgb(253, 131, 32)',
  fontWeight: '600',
  marginLeft: '4px'
}

class Comment extends React.Component {
  state = {
    show: true
  }

  componentDidMount () {
    API.fetchItem(this.props.id)
  }

  render () {
    const { show } = this.state
    const { stories, comments, items } = this.props
    let id = this.props.id.toString()
    let item = items.get(id)
    let depth = (this.props.depth) || 0
    if(show) {
      return (
        <div key={`${id}_span`} style={commentWrapper}>
          <div key={id} style={styleName}>
            <div key={`${id}_div_1`}>
              <div key={`${id}_div_2`}>
                <span key={`${id}_hideshow`} onClick={() => this.setState({ show: !show })}>[-]</span>
                <span style={commentAuthor}>{item && item.get('by')}</span>
              </div>
            </div>
            <div style={commentStyle}>
              <div key={`${id}_div_3`} dangerouslySetInnerHTML={{ __html: (item && item.get('text')) }}></div>
              {item && item.has('kids') && item.get('kids').map(kid => {
                return (<Comment id={kid} depth={depth + 1} stories={stories} comments={comments} items={items} />)
              })}
            </div>
          </div>
          <br key={`${id}_br`} />
        </div>
      )
    } else {
      return (
        <div key={`${id}_span`} style={commentWrapper}>
          <div key={id} style={styleName}>
            <div key={`${id}_div_1`}>
              <div key={`${id}_div_2`}>
                <span key={`${id}_hideshow`} onClick={() => this.setState({ show: !show })}>[+]</span>
                <span style={commentAuthor}>{item && item.get('by')}</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(Comment)