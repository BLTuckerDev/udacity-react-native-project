import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from "react-native";

export default class DeckList extends Component {


    render() {
        return (
            <View>
                <Text>This is the Deck List Component!</Text>
            </View>
        )
    }
}



function mapStateToProps({decksObject}){

    return {
        deckList: Object.keys(decksObject)
    }

}



//TODO Connect once the store is up
// export default connect(mapStateToProps)(DeckList);