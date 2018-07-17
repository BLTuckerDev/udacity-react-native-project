import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, Text, View} from "react-native";


//TODO Style this
class DeckList extends Component {

    renderDeck = ({item}) =>{

        return (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.questions.length} cards</Text>
            </View>
        )

    };


    render() {

        const {deckList} = this.props;

        return (
            <View>
                <FlatList
                    data={deckList}
                    renderItem={this.renderDeck}
                    keyExtractor={(item, index) => item.title}>

                </FlatList>
            </View>
        )
    }
}



function mapStateToProps({decks}){

    console.log("deck list map state to props");
    console.log(decks);

    //TODO Remove when we load real data
    if(!decks){
        decks = {
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
        };
    }


    return {
        deckList: Object.keys(decks).map((key) => decks[key])
    }

}


export default connect(mapStateToProps)(DeckList);