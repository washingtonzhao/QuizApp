import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import * as Progress from 'react-native-progress';

export default function Results({ route, navigation }){
    const score = route.params;


    return(
        <View style={styles.screen}>
          <View style={styles.resultContainer}>
            <Image source={require('../../assets/images/trophy.png')} />
            <Text style={styles.congratulation}>Congratulations!</Text>
            <Text style={styles.normalText}>You finished the quiz on Budgeting Basics! Well done!</Text>
            <View style={styles.progress}>
              <View style={styles.bar}>
                <Text style={styles.normalText}>Beginner</Text>
                <Text style={styles.normalText}>Expert</Text>
              </View>
              <Progress.Bar progress={score/5} height={11} width={null} color={'#FFFFFF'}/>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.retakeQuiz}>Retake Quiz</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate("QuizNav");
            }}>
              <Text style={styles.returnHome}>Return to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#7657FE',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  resultContainer: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
  },

  progress: {
    width: '90%',
    flexDirection: 'column',
    flex: 1,
  },

  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },

  congratulation: {
    fontSize: 25,
    lineHeight: 29,
    fontWeight: "900",
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
  },

  normalText:{
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "normal",
    color: '#FFFFFF',
    textAlign: 'center',
  },

  buttons:{
    width: '90%',
    position: 'absolute',
    bottom: 15,
  },

  button: {
    backgroundColor: '#FFFFFF',
    height: 62,
    width: '100%',
    borderRadius: 11,
  },

  retakeQuiz:{
    textAlign: 'center',
    color: '#7657FE',
    fontSize: 24,
    lineHeight: 62,
  },

  returnHome:{
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 28,
    marginTop: 10,
  }

});