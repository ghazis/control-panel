import { combineReducers } from 'redux';
import { swState } from './swReducer';
import { carState } from './carReducer';
import { thermState } from './thermReducer';

export default combineReducers({
	swState,
	carState,
	thermState
});