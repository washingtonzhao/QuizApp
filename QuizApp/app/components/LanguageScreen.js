import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Language from './Language';



export default class LanguageScreen extends Component{

    
    render(){
        return (
            <View style={styles.mainPage}>
                <Text style={styles.whiteText}>Choose a Language</Text>
                <View style={styles.languages}>
                    <Language type="English" imageSource={require('../../assets/images/languages/English.png')} />
                    <Language type="Greek" imageSource={require('../../assets/images/languages/Greek.png')}/>
                    <Language type="Arabic" imageSource={require('../../assets/images/languages/Arabic.png')}/>
                    <Language type="Farsi" imageSource={require('../../assets/images/languages/Farsi.png')}/> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainPage: {
        backgroundColor: '#7657FE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    whiteText: {
        color: '#FFFFFF',
        fontSize: 25,
        lineHeight: 29,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 98,
    }, 
    
    languages: {
        width: 264,
        maxHeight: 344,
        borderRadius: 20,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});