
export const LOAD_DECKS = "loadDecks";
export const ADD_NEW_DECK = "addNewDeck";

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