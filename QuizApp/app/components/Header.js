import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';



export default class Header extends Component{
    constructor(props){
        super(props);
        this.headerText = props.header;
    }

    render(){
        return(
            <View style={styles.headerBar}>
            <Text style={styles.headerText}>{ this.headerText }</Text>
            
            </View>
        );
    }
}


const styles = StyleSheet.create({
        headerBar: {
            backgroundColor: '#7657FE',
            width: '100%',
            height: '15%',
        },

        headerText: {
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: '900',
            lineHeight: 39,
            marginVertical: 25,
            marginLeft: '5%',
        },

});