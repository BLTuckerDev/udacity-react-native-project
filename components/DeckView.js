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
        const {deckId} = navigation.state.params

        return {
            title: deckId
        }

    };

    addCard = () => {

    };

    startQuiz = () => {

    };

    render() {

        const {deck} = this.props;

        return (
            <View style={styles.center}>
                <Text style={styles.deckTitleText}>{deck.title}</Text>
                <Text style={styles.deckCardCountText}>{deck.questions.length} cards</Text>

                <TouchableOpacity style={styles.addCardButton}
                                  onPress={this.addCard}>
                    <Text style={styles.addCardButtonText}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.startQuizButton}
                                  onPress={this.startQuiz}>
                    <Text style={styles.startQuizButtonText}>Start Quiz</Text>
                </TouchableOpacity>

            </View>
        )

    }

}


function mapStateToProps(state, {navigation}) {
    const {deckId} = navigation.state.params;
    const deck = state.decks[deckId];

    return {
        deck
    }
}

export default connect(mapStateToProps)(DeckView)