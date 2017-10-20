import { Map, fromJS, List } from 'immutable'
import uniq from 'lodash/uniq'
import update from 'react-addons-update'

export const CHANGE_STORIES = 'CHANGE_STORIES'
export const CHANGE_ITEMS   = 'CHANGE_ITEMS'

let defaultState = window.localStorage.getItem('state')
if (defaultState) {
  defaultState = fromJS(JSON.parse(defaultState))
} else {
  defaultState = new Map({
    stories: {},
    comments: {},
    items: {}
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
      alert(1)
      newState = state.setIn(['items',action.id], action.item)
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