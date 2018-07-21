import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {appBlue} from "../utils/colors";
import {addCard} from "../actions";
import {addCardToDeck} from "../utils/StorageHelpers";


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 30,
        marginRight: 30
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        alignSelf: 'stretch',
        marginBottom: 20,
        padding: 10
    },
    submitQuestionButton: {
        backgroundColor: appBlue,
        padding: 20,
        height: 48,
        justifyContent: 'center'
    },
    submitQuestionButtonText: {
        fontSize: 18,
        color: 'white'
    }
});


class AddCard extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;
        return {
            deck: deck
        }
    };

    state = {
        questionText: "",
        answerText: ""
    };

    saveCard = () => {
        const deckTitle = this.props.deck.title;

        this.props.dispatch(addCard(deckTitle, this.state.questionText, this.state.answerText));
        addCardToDeck(deckTitle, {
            question: this.state.questionText,
            answer: this.state.answerText
        });

        this.setState(() => ({questionText: "", answerText: ""}));
    };

    render() {

        return (
            <View style={styles.center}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(questionText) => this.setState({questionText})}
                    placeholder="Question"
                    value={this.state.questionText}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(answerText) => this.setState({answerText})}
                    placeholder="Answer"
                    value={this.state.answerText}
                />

                <TouchableOpacity style={styles.submitQuestionButton}
                                  onPress={this.saveCard}>
                    <Text style={styles.submitQuestionButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}) {
    const {deck} = navigation.state.params;

    return {
        deck
    }
}

export default connect(mapStateToProps)(AddCard);