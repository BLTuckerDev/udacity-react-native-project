import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {appBlue} from "../utils/colors";


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60
    },
    deckTitleText: {
        fontSize: 24,
        marginBottom: 20
    },
    deckCardCountText: {
        fontSize: 24,
        marginBottom: 20
    },
    addCardButton: {
        padding: 20,
        height: 48,
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 60,
        marginBottom: 20
    },
    startQuizButton: {
        backgroundColor: appBlue,
        padding: 20,
        height: 48,
        justifyContent: 'center'
    },
    startQuizButtonText: {
        fontSize: 18,
        color: 'white'
    },
    addCardButtonText: {
        fontSize: 18,
        color: '#000'
    }
});


class DeckView extends Component {

    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;

        return {
            title: deck.title,
            deck: deck
        }

    };

    render() {
        const {deck} = this.props;

        return (
            <View style={styles.center}>
                <Text style={styles.deckTitleText}>{deck.title}</Text>
                <Text style={styles.deckCardCountText}>{deck.questions.length} cards</Text>

                <TouchableOpacity style={styles.addCardButton}
                                  onPress={() => this.props.navigation.navigate('AddCard', {deck: deck})}>
                    <Text style={styles.addCardButtonText}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.startQuizButton}
                                  onPress={() => this.props.navigation.navigate('Quiz', {questions: deck.questions})}>
                    <Text style={styles.startQuizButtonText}>Start Quiz</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


function mapStateToProps({decks}, {navigation}) {
    const {deck} = navigation.state.params;

    return {
        deck,
        date: new Date()//Without this, the component wouldn't re-render,
        // even though mapStateToProps was being called. Decklist re-renders just fine.
    };
}

export default connect(mapStateToProps)(DeckView);