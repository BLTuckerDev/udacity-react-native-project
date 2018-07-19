import React, {Component} from 'react'
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import {
    createStackNavigator, createTabNavigator,
} from "react-navigation";
import {View} from "react-native";
import {getDecks} from "../utils/StorageHelpers";
import {loadDecks} from "../actions";
import {connect} from "react-redux";

const Tabs =  createTabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Deck List'
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck'
            },
        }
    },
    {
        tabBarOptions: {
            style: {
                height: 56,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    });


const AppNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    }
});

class Home extends Component {

    componentDidMount(){
        getDecks().then((decks) => {this.props.dispatch(loadDecks(decks))})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator/>
            </View>
        )
    }

}

function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps)(Home)