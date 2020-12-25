import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';


export default function Results({ route, navigation }){
    const score = route.params;

    return(
        <Text>{score}</Text>
    )
}

