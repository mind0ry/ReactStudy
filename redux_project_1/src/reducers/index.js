import {combineReducers} from 'redux';
import foodReducer from "../reducers/foodReducer";
import recipeReducer from "./recipeReducer";
import boardReducer from "../reducers/boardReducer";

export default combineReducers({
    foods: foodReducer,
    recipes: recipeReducer,
    boards: boardReducer
})