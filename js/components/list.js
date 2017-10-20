import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'
import { Link } from 'react-router-dom'

import Header from './header'

import API from '../classes/api'

class List extends React.Component {
  componentDidMount () {
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
                <div>
                  <Link to={`/article/${story}`} key={story}>{richItem.get('title')}</Link><br />
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
