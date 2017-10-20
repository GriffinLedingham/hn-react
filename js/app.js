import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from './classes/api'

class App extends React.Component {
  componentDidMount () {
    API.fetchTopStories()
  }

  render () {
    const { stories, comments, items } = this.props
    return (
      <div>
        {stories && stories.map && stories.map((story) => {
            let richItem = items.get(story.toString())
            if(typeof richItem != 'undefined'){
              return (<div key={story}>{richItem.get('title')}</div>)
            }
        })}
      </div>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(App)
