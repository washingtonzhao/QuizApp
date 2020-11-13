import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';




export default class LandingScreen extends Component{

    componentDidMount(){
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.navigate('LanguageScreen');
        }, 1000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
    }
    
    render(){
        return (
            <View style={styles.mainPage}>
                <Image source={require('../../assets/images/logo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainPage: {
        backgroundColor: '#7657FE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});