import { combineReducers } from 'redux'
import projectReducer from '../components/Pages/projectReducer'

export default combineReducers({
    projectState:projectReducer
});