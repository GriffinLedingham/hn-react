import { CHANGE_STORIES, CHANGE_ITEMS } from '../state'

export default {
  changeStories (stories) {
    return {
      type: CHANGE_STORIES,
      stories,
    }
  },

  changeItem (item) {
    let id = item.id
    return {
      type: CHANGE_ITEMS,
      id,
      item
    }
  }
}