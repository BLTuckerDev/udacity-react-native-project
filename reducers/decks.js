import {ADD_NEW_DECK, LOAD_DECKS} from "../actions";

export default function decksReducer(state = null, action){
    switch(action.type){
        case LOAD_DECKS:
            return action.decks
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