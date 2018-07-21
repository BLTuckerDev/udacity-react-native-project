import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    },
    progressText: {
        alignSelf: 'flex-start',
        fontSize: 18,
        color: "#000"
    },
    cardText: {
        marginTop: 40,
        fontSize: 32,
        color: "#000"
    },
    cardSubtext: {
        color: "#F00",
        fontSize: 22,
        marginTop: 30,
        padding: 10
    },
    correctButton: {
        marginTop: 20,
        backgroundColor: "#0F0",
        padding: 10,
        borderRadius: 5
    },
    incorrectButton: {
        marginTop: 20,
        backgroundColor: "#F00",
        padding: 10,
        borderRadius: 5

    },
    correctButtonText: {
        color: "#FFF",
        fontSize: 18,

    },
    incorrectButtonText: {
        color: "#FFF",
        fontSize: 18,

    }
});

class Quiz extends Component {
    static navigationOptions = ({navigation}) => {
        const {questions} = navigation.state.params;
        return {
            questions
        }
    };

    state = {
        currentCard: 1,
        showQuestion: true
    };

    nextCard = () => {
        const nextCard = this.state.currentCard === this.props.questions.length ? 1 : this.state.currentCard + 1;
        this.setState({currentCard: nextCard})
    };


    render() {
        const {questions} = this.props;
        const totalCards = questions.length;
        const currentCard = questions[this.state.currentCard - 1];
        const showQuestion = this.state.showQuestion;

        return (
            <View style={styles.center}>
                <Text style={styles.progressText}>{this.state.currentCard} / {totalCards}</Text>
                <Text style={styles.cardText}>{showQuestion ? currentCard.question : currentCard.answer}</Text>
                <Text style={styles.cardSubtext}
                      onPress={() => this.setState({showQuestion: !showQuestion})}>{showQuestion ? "Answer" : "Question"}</Text>
                <TouchableOpacity style={styles.correctButton} onPress={() => this.nextCard()}>
                    <Text style={styles.correctButtonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.incorrectButton} onPress={() => this.nextCard()}>
                    <Text style={styles.incorrectButtonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapStateToProps({decks}, {navigation}) {
    const {questions} = navigation.state.params;

    return {
        questions
    }
}


export default connect(mapStateToProps)(Quiz);