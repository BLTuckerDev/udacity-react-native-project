

//TODO handle actions

import {ADD_NEW_DECK} from "../actions";
import {generateUID} from "../utils/StorageHelpers";

export default function decksReducer(state = null, action){
    switch(action.type){
        case ADD_NEW_DECK:

            var newDeck = {
                title: action.title,
                questions: []
            };


            return {
                ...state,
                [action.title]: newDeck
            }

        default:
            return state;
    }
}