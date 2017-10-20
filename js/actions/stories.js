import { CHANGE_STORIES, CHANGE_ITEMS } from '../state'
import { Map, fromJS, List } from 'immutable'

export default {
  changeStories (stories) {
    return {
      type: CHANGE_STORIES,
      stories: new List(stories),
    }
  },

  changeItem (item) {
    let id = item.id
    return {
      type: CHANGE_ITEMS,
      id,
      item: new Map(item)
    }
  }
}