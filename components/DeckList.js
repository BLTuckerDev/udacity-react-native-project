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
                    keyExtractor={(item, index) => item.id}>

                </FlatList>
            </View>
        )
    }
}



function mapStateToProps({decksObject}){


    //TODO Remove when we load real data
    if(!decksObject){
        decksObject = {
            React: {
                id: "1",
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
                id: "2",
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
        deckList: Object.keys(decksObject).map((key) => decksObject[key])
    }

}



//TODO Connect once the store is up
export default connect(mapStateToProps)(DeckList);