import { Map, fromJS, List } from 'immutable'

export const CHANGE_STORIES = 'CHANGE_STORIES'
export const CHANGE_ITEMS   = 'CHANGE_ITEMS'

export default {
  changeStories (stories) {
    return {
      type: CHANGE_STORIES,
      stories: new List(stories),
    }
  },

  changeItem (item) {
    item = new Map(item)
    let newMap = {}
    newMap[item.get('id')] = item
    return {
      type: CHANGE_ITEMS,
      item: new Map(newMap)
    }
  }
}