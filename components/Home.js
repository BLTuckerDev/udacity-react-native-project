import React, {Component} from 'react'
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import {
    createStackNavigator, createTabNavigator,
} from "react-navigation";
import {View, Platform} from "react-native";

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

export default class Home extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator/>
            </View>
        )
    }

}