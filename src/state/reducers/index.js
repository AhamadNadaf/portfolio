import { combineReducers } from "redux";
import {activeLinkReducer} from './activeLinkReducer'

const reducers = combineReducers({
    activeLink:activeLinkReducer,
})

export default reducers