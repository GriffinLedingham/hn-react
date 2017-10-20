import { Map, fromJS, List } from 'immutable'
import uniq from 'lodash/uniq'
import update from 'react-addons-update'
import {CHANGE_STORIES, CHANGE_ITEMS} from './actions/stories'

let defaultState = window.localStorage.getItem('state')
if (defaultState) {
  defaultState = fromJS(JSON.parse(defaultState))
} else {
  defaultState = new Map({
    stories: new List(),
    comments: new Map(),
    items: new Map()
  })
}

export default function (state = defaultState, action) {
  let newState
  let change = true
  switch (action.type) {
    case CHANGE_STORIES:
      newState = state.mergeIn(['stories'], action.stories)
      break
    case CHANGE_ITEMS:
      newState = state.mergeIn(['items'] ,action.item)
      break
    default:
      change = false
      newState = state
      break
  }

  if (change) {
    window.localStorage.setItem('state', JSON.stringify(newState.toJS()))
  }
  return newState
}