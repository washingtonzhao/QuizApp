import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import Header from './Header';

// import StringUtils from '../../libs/StringUtils'

export default class QuizList extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    }

  }

  _onPress = () => {
    this.toggleModal();
    this.props.onPressItem(this.props.quiz);
  }

  toggleModal = () =>{
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render(){
    const { modalVisible } = this.state;
    const { quiz, onPressItem } = this.props
    return (
        <View style={styles.game}>
          <View style={[{backgroundColor: quiz.color},styles.quizData]}>
            <View style={styles.quizText}>
              <Text style={styles.quizName}>{quiz.name}</Text>
              <Text style={styles.quizDescription}>{quiz.description}</Text>
            </View>
            <TouchableNativeFeedback style={styles.startQuiz} onPress={this.toggleModal}>
              <View>
              <Image style={{ tintColor: quiz.color }} source={require('../../assets/images/playButton.png')} />
              <Text style={[{color: quiz.color}, styles.startText]}>Start Quiz</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() =>{
              this.toggleModal();
            }}
          >
            <Header header={quiz.name} />
            <View style={styles.modalContainer}>
              <View style={styles.introText}>
                <Text style={styles.boldedText}>Introduction</Text>
                <Text style={styles.introContent}>{quiz.introduction}</Text>

                <Text style={styles.boldedText}>{quiz.numQuestions} Multiple Choice Questions</Text>
                <Text style={styles.introContent}>{quiz.numQuestions} Multiple Choice Questions</Text>
              </View>

              <TouchableNativeFeedback style={styles.takeQuiz} onPress={this._onPress}>
                <Text style={styles.buttonText}>Take Quiz</Text>
              </TouchableNativeFeedback>
            </View>


          </Modal> 
        </View>
    );
  }
};

const styles = StyleSheet.create({

  game: {
    flex: 1,
    flexDirection: 'row',

    minHeight: 150,
    height: 'auto',
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
  },

  quizData: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingTop: 10,
  },

  quizName: {
    color: '#FFFFFF',

    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },

  quizDescription: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 18,
    fontWeight: 'normal',
    marginTop: 1,
  },
  
  startQuiz: {
    width: 104,
    maxHeight: 32,
    minHeight: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 36,    
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15, 
  },

  startText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
  },

  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },

  introText: {
    textAlign: 'left',
    margin: 'auto',
    padding: 20,
    flex: 4,
  },

  boldedText:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
  },

  introContent: {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 16,
    lineHeight: 19,
  },

  takeQuiz: {
    width: 320,
    maxHeight: 62,
    backgroundColor: '#27F184',
    borderRadius: 11,    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
});
