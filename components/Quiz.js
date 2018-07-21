import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {appBlue} from "../utils/colors";
import {clearDailyQuizNotification, setDailyQuizNotification} from "../utils/NotificationHelpers";


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
        height: 48,
        borderRadius: 5
    },
    incorrectButton: {
        marginTop: 20,
        backgroundColor: "#F00",
        padding: 10,
        height: 48,
        borderRadius: 5

    },
    correctButtonText: {
        color: "#FFF",
        fontSize: 18,

    },
    incorrectButtonText: {
        color: "#FFF",
        fontSize: 18,

    },
    scoreText: {
        marginTop: 20,
        fontSize: 24,
        color: "#000"
    },
    restartQuizButton: {
        backgroundColor: appBlue,
        padding: 20,
        height: 48,
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 40
    },
    backToDeckButton: {
        padding: 20,
        height: 48,
        justifyContent: 'center',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20

    },
    restartQuizButtonText: {
        color: "#FFF",
        fontSize: 18,
    },
    backToDeckButtonText: {
        fontSize: 18,
        color: '#000'
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
        showQuestion: true,
        correctAnswers: 0
    };

    nextCard = () => {
        const nextCard = this.state.currentCard + 1;
        this.setState({currentCard: nextCard})
    };

    restartQuiz = () => {
        this.setState({currentCard: 1, showQuestion: true, correctAnswers: 0})
    };

    backToDeck = () => {
        this.props.navigation.pop();
    };

    componentDidMount(){
        clearDailyQuizNotification().then(setDailyQuizNotification)
    }

    render() {
        const {questions} = this.props;
        const totalCards = questions.length;

        if(this.state.currentCard === questions.length + 1){

            const percentCorrect = ((this.state.correctAnswers / questions.length) * 100).toFixed(0);

            return (
                <View style={styles.center}>
                    <Text style={styles.scoreText}>Good Job! You got {percentCorrect}% Correct</Text>
                    <TouchableOpacity style={styles.restartQuizButton} onPress={() => {this.restartQuiz()}}>
                        <Text style={styles.restartQuizButtonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backToDeckButton} onPress={() => this.backToDeck()}>
                        <Text style={styles.backToDeckButtonText}>Back To Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }


        const currentCard = questions[this.state.currentCard - 1];
        const showQuestion = this.state.showQuestion;


        return (
            <View style={styles.center}>
                <Text style={styles.progressText}>{this.state.currentCard} / {totalCards}</Text>
                <Text style={styles.cardText}>{showQuestion ? currentCard.question : currentCard.answer}</Text>
                <Text style={styles.cardSubtext}
                      onPress={() => this.setState({showQuestion: !showQuestion})}>{showQuestion ? "Answer" : "Question"}</Text>
                <TouchableOpacity style={styles.correctButton} onPress={() => {
                    this.setState({correctAnswers: this.state.correctAnswers+1});
                    this.nextCard()}}>
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