import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    },
    deckRowItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        padding: 30
    },
    deckTitleText: {
        fontSize: 18
    },
    deckCountText: {
        fontSize: 14
    }
});

class DeckList extends Component {

    renderDeck = ({item}) =>{
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {deckId: item.title})}>
                <View style={styles.deckRowItem}  >
                    <Text style={styles.deckTitleText}>{item.title}</Text>
                    <Text style={styles.deckCountText}>{item.questions.length} cards</Text>
                </View>
            </TouchableOpacity>
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