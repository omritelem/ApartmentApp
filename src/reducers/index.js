"use strict"
import {combineReducers} from 'redux';

// Here import reducers to be combined
import {apartmentReducers} from './apartmentReducers';

// Here combine the reducers
export default combineReducers({
  apartmentRecuder: apartmentReducers
})
