import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from "./components/Home";
import { createStore } from 'redux'
import reducer from './reducers'
import {Provider} from "react-redux";


const store = createStore(reducer);

export default class App extends React.Component {

    componentDidMount(){
        //TODO Load the data
    }

    render() {
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <Home/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
