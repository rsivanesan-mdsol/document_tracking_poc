import {combineReducers} from 'redux';
import documentReducer from './documentReducer';

const rootReducer = combineReducers({
    documents: documentReducer
})

export default rootReducer;