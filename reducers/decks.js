import {ADD_CARD, ADD_NEW_DECK, LOAD_DECKS} from "../actions";

export default function decksReducer(state = null, action) {
    switch (action.type) {
        case ADD_CARD:

            const card = {
                question: action.question,
                answer: action.answer
            };

            const deck = Object.keys(state)
                .map((deckTitle) => {
                    return state[deckTitle]
                })
                .filter((deck) => {
                    return deck.title === action.deckTitle
                })[0];

            deck.questions.push(card);

            return {
                ...state
            };

        case LOAD_DECKS:
            return action.decks;
        case ADD_NEW_DECK:

            var newDeck = {
                title: action.title,
                questions: []
            };


            return {
                ...state,
                [action.title]: newDeck
            };

        default:
            return state;
    }
}