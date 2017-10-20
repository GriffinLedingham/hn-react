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
        {stories && stories.toList && stories.toList().map(item => {
          let richItem = items.get(item.toString())
          if(typeof richItem != 'undefined'){
            return (<div key={item}>{richItem.get('title')}</div>)
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
