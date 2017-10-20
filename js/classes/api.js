import stories from '../actions/stories'
import store from '../store'

const HOST = 'https://hacker-news.firebaseio.com'
const toJSON = response => response.json();

let API = {
  _apiRequest: (url)=>{
    return fetch(`${HOST}${url}`).then(toJSON)
  },

  _shouldFetchStory: (id)=>{
    let items = store.getState().get('items')
    return (typeof store.getState().get('items').get(id.toString()) == 'undefined')
  },

  fetchTopStories: ()=>{
    return API._apiRequest ('/v0/topstories.json').then((r)=>{
      store.dispatch(stories.changeStories(r))
      return r
    }).then((r)=>{
      for(let i=0;i<50;i++) {
        let id = r[i]
        API.fetchItem(id)
      }
    })
  },

  fetchItem: (id)=>{
    if(API._shouldFetchStory(id)) {
      return API._apiRequest (`/v0/item/${id}.json`).then((r)=>{
        store.dispatch(stories.changeItem(r))
      })
    } else {
      return store.getState().get('items').get(id.toString())
    }
  }
}

document.API = API

export default API