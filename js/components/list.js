import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'
import { Link } from 'react-router-dom'

import Header from './header'

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
  textAlign: 'left',
  verticalAlign: 'top',
  width:'38px',

}

const scoreSubStyle = {
  display:'block',
  fontSize:'10px',
  textAlign: 'center'
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

class List extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    API.fetchTopStories()
  }

  render () {
    const { stories, comments, items } = this.props
    return (
      <Header>
        <div>
        {stories && stories.map && stories.map((story) => {
            let richItem = items.get(story.toString())
            if(typeof richItem != 'undefined'){
              return (
                <div style={titleWrapper}>
                  <span style={scoreStyle}>
                    {richItem && richItem.get('score')}
                    <span style={scoreSubStyle}>
                      pts.
                    </span>
                  </span>
                  <div style={titleInnerWrapper}>
                    <Link to={`/article/${story}`} style={titleStyle} key={story}>{richItem.get('title')}</Link><br />
                    <span style={author}>
                      by {richItem && richItem.get('by')}
                    </span>
                  </div>
                </div>
              )
            }
        })}
        </div>
      </Header>
    )
  }
}

export default connect(state => ({
  comments: state.get('comments'),
  items: state.get('items'),
  stories: state.get('stories')
}))(List)
