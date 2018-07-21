
export const LOAD_DECKS = "loadDecks";
export const ADD_NEW_DECK = "addNewDeck";
export const ADD_CARD = "addCard";

export function loadDecks(decks){
    return {
        type: LOAD_DECKS,
        decks
    }
}

export function addNewDeck(deckTitle){
    return {
        type: ADD_NEW_DECK,
        title: deckTitle
    }
}

export function addCard(deckTitle, question, answer){
    return {
        type: ADD_CARD,
        deckTitle,
        question,
        answer
    }
}