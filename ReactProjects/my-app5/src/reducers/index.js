import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combinedReducers} from 'react-redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer
})
export default allReducers;