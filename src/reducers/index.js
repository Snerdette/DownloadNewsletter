import {combineReducers} from 'redux';
import articles from './articleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    articles,
    ajaxCallsInProgress
});

export default rootReducer;