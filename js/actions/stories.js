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
    item = new Map(item)
    return {
      type: CHANGE_ITEMS,
      id: item.get('id'),
      item: item
    }
  }
}