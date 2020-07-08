import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import React from 'react';
import Main from './app/components/Main';


export default class App extends React.Component {
    render() {
        return (
            <Main />
        );
    }
}
