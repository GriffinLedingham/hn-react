import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'

import API from '../classes/api'

import Item from './item'
import List from './list'
import Header from './header'

import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom'

class App extends React.Component {
  componentDidMount () {

  }

  render () {
    const { stories, comments, items } = this.props
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/article/:id" component={Item} />
          <Route path="/" component={List} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state => ({
  stories: state.get('stories'),
  comments: state.get('comments'),
  items: state.get('items')
}))(App)
