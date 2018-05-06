import { createStore } from 'redux';
import { POSTS, CATEGORIES } from './blog'

const  ACTIONS = {
    POSTS,
    CATEGORIES
}

const INITIAL = {
  category:[],
  posts:[]
};

export default createStore( (state, action) => (
    action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);