
export const ADD_NEW_DECK = "addNewDeck";


export function addNewDeck(deckTitle){
    return {
        type: ADD_NEW_DECK,
        title: deckTitle
    }
}