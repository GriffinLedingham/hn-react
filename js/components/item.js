import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import Header from './header'
import Comment from './comment'

import API from '../classes/api'

class Item extends React.Component {
  componentDidMount () {
    API.fetchItem(this.props.match.params.id)
  }

  render () {
    const { stories, comments, items } = this.props
    let id = this.props.match.params.id.toString()
    let item = items.get(id)
    return (
      <Header>
        <div key={`${id}_div`}>
          {item && item.get('title')}

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
