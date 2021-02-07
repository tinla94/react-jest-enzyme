import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments.reducer';

export default combineReducers({
    comments: commentsReducer
});