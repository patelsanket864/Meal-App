import {MEALS} from '../../Data/Dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../Actions/meals';

const initialState={
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE : 
            const existingIndex= state.favoriteMeals.findIndex(meal=>meal.id === action.mealId);
            if(existingIndex>=0){
                const updatedFavMeals=[...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex,1);
                return {...state,favoriteMeals : updatedFavMeals};
            }else{
                const meal=state.meals.find(meal=> meal.id === action.mealId);
                return { ...state, favoriteMeals : state.favoriteMeals.concat(meal)}
            }
        
        case SET_FILTERS :
            const appliedfilters = action.filters;
            const updatedFilters = state.meals.filter(meal => {
                if(appliedfilters.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                return true;
            });
        return {...state, filteredMeals : updatedFilters }
        default:
            return state;
    }
    return state;
}

export default mealsReducer;