import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

const divStyle = {
  marginLeft: '40px',
  position: 'relative'
};

class Comment extends React.Component {
  componentDidMount () {
    API.fetchItem(this.props.id)
  }

  render () {
    const { stories, comments, items } = this.props
    let id = this.props.id.toString()
    let item = items.get(id)
    return (
      <span key={`${id}_span`}>
        <div key={id} style={divStyle}>
          {item && item.get('text')}

          {item && item.has('kids') && item.get('kids').map(kid => {
            return (<Comment id={kid} stories={stories} comments={comments} items={items} />)
          })}
        </div>
        <br key={`${id}_br`} />
      </span>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(Comment)