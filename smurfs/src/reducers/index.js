/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS, 
  SMURFS_FETCHED, 
  ERROR,
  SAVING_SMURFS,
  SMURF_SAVED
} from '../actions/index';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
switch (action.type){
  case FETCHING_SMURFS: 
    return {...state, fetchingSmurfs: true, smurfs: [], error: ''}
  case SMURFS_FETCHED: 
    return {...state, fetchingSmurfs: false, smurfs: action.payload, error: ''}
  case ERROR: 
    return {...state, fetchingSmurfs: false, addingSmurf: false, smurfs: [], error: action.payload}
  case SAVING_SMURFS:
    return {...state, addingSmurf: true, smurfs: action.payload, error: ''}
  case SMURF_SAVED: 
    return {...state, addingSmurf: false, smurfs: action.payload, error:''}
  default: 
  return state;
  }
}