import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from "./components/Home";
import { createStore } from 'redux'
import reducer from './reducers'
import {Provider} from "react-redux";
import {setDailyQuizNotification} from "./utils/NotificationHelpers";


const store = createStore(reducer);

export default class App extends React.Component {

    componentDidMount() {
        setDailyQuizNotification();
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
