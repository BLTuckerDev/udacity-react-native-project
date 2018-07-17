import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, StyleSheet, TouchableOpacity, View, TextInput} from "react-native";
import {addNewDeck} from "../actions";
import {saveDeckTitle} from "../utils/StorageHelpers";

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    },
    titleText: {
        fontSize: 18,
        marginBottom: 20
    },
    deckTitleInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 4,
        alignSelf: 'stretch',
        marginBottom: 20,
        padding: 10
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 20,
        height: 48,
        justifyContent: 'center'
    },
    submitButtonText: {
        fontSize: 18,
        color: 'white'
    }
});

class NewDeck extends Component {

    state = {
        text: ""
    };

    submit = () => {
        const deckTitle = this.state.text;
        this.props.dispatch(addNewDeck(deckTitle));
        saveDeckTitle(deckTitle);

        this.setState(() => ({text: ""}));
    };


    render() {

        return (
            <View style={styles.center}>
                <Text style={styles.titleText}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.deckTitleInput}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Deck Title"
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.submitButton}
                    onPress={this.submit}>
                    <Text style={styles.submitButtonText}>SUBMIT</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps)(NewDeck)