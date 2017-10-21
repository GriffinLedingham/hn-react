import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import Header from './header'
import Comment from './comment'

import API from '../classes/api'

const titleStyle = {
  fontFamily: 'Verdana',
  fontSize: '16px',
  display:'inline-block',
  verticalAlign: 'top',
  marginBottom: '3px',
  marginTop: '2px'
}

const scoreStyle = {
  display:'inline-block',
  fontSize: '20px',
  textAlign: 'center',
  verticalAlign: 'top'
}

const scoreSubStyle = {
  display:'block',
  fontSize:'10px'
}

const titleWrapper = {
  marginTop:'30px',
  marginBottom:'20px',
  marginLeft: '20px'
}

const author = {
  display:'block',
  fontSize: '10px'
}

const titleInnerWrapper = {
  display:'inline-block',
  marginLeft:'20px',
}

class Item extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    API.fetchItem(this.props.match.params.id)
  }

  render () {
    const { stories, comments, items } = this.props
    let id = this.props.match.params.id.toString()
    let item = items.get(id)
    return (
      <Header>
        <div key={`${id}_div`}>
          <div>
            <div style={titleWrapper}>
              <span style={scoreStyle}>
                {item && item.get('score')}
                <span style={scoreSubStyle}>
                  pts.
                </span>
              </span>
              <div style={titleInnerWrapper}>
                <a href={item && item.get('url')} target="_blank" style={titleStyle}>{item && item.get('title')}</a>
                <span style={author}>
                  by {item && item.get('by')}
                </span>
              </div>
            </div>
          </div>

          {item && item.has('kids') && item.get('kids').map(kid => {
            return (
              <Comment id={kid} stories={stories} comments={comments} items={items} />
            )
          })}
        </div>
      </Header>
    )
  }
}

export default connect(state => ({
  comments: state.get('comments'),
  items: state.get('items')
}))(Item)
