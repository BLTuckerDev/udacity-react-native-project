import {AsyncStorage} from 'react-native'

const ALL_DECKS_STORAGE_KEY = "MobileFlashcards:AllDecks";

/*

Example data:

{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
 */

export function getDecks(){
    return AsyncStorage.getItem(ALL_DECKS_STORAGE_KEY)
        .then(JSON.parse)
}


export function getDeck(id){
    return getDecks().then((decksObject) => {
        return decksObject[id];
    })
}


export function saveDeckTitle(title){
    getDecks().then((decksObject) => {

        const updatedDecks = {
            ...decksObject,
            [generateUID()] : { title, questions: []}
        }


        AsyncStorage.setItem(ALL_DECKS_STORAGE_KEY, updatedDecks);

        return updatedDecks
    })
}

export function addCardToDeck(deckTitle, card){
    getDecks().then((decksObject) => {

        const deck = Object.keys(decksObject)
            .filter((deckKey) => {
                return decksObject[deckKey].title === deckTitle
            })[0];

        deck.questions.push(card);

        AsyncStorage.setItem(ALL_DECKS_STORAGE_KEY, decksObject);

        return decksObject;
    })
}


function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}