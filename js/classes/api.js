import stories from '../actions/stories'
import store from './store'

const HOST = 'https://hacker-news.firebaseio.com'
const toJSON = response => response.json();

let API = {
  _apiRequest: (url)=>{
    return fetch(`${HOST}${url}`).then(toJSON)
  },

  _shouldFetchStory: (id)=>{
    let items = store.getState().get('items')
    if(typeof items.toObject == 'undefined') return true
    return (!store.getState().get('items').toObject().hasOwnProperty(id))
  },

  fetchTopStories: ()=>{
    return API._apiRequest ('/v0/topstories.json').then((r)=>{
      store.dispatch(stories.changeStories(r))
      API.fetchItem(r[0])
    })
  },

  fetchItem: (id)=>{
    if(API._shouldFetchStory(id)) {
      return API._apiRequest (`/v0/item/${id}.json`).then((r)=>{
        store.dispatch(stories.changeItem(r))
      })
    } else {
      return store.getState().get('items').toJSON()[id]
    }
  }
}

document.API = API

export default API