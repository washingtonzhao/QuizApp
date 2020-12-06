import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Language = ({ type, imageSource, _onPress }) => {
    const nav = useNavigation();
    return (
        <TouchableOpacity style={styles.language} onPress= {_onPress}> 
            <View style={styles.item}>
                <Image source={imageSource} />
                <Text style={styles.languageText}>{type}</Text>
            </View>
        </TouchableOpacity>
    )

}

export default Language;

const styles = StyleSheet.create({
    language: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        flex: 1,
    },

    item: {
        width: '80%',
        height: 'auto',
        paddingLeft: '10%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    languageText: {
        fontSize: 22,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#313131',
        paddingLeft: 15,
    },
});