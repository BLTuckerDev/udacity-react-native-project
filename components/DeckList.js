import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    }
});

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

        if(deckList.length === 0){
            return (
                <View style={styles.center}>
                    <Text>Add some decks so you can start to study!</Text>
                </View>
            )
        }

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

    if(!decks){
        decks = {}
    }

    return {
        deckList: Object.keys(decks).map((key) => decks[key])
    }

}


export default connect(mapStateToProps)(DeckList);