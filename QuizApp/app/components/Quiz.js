/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  TouchableNativeFeedback,
} from 'react-native';


import Header from './Header';
import GameHelper from './services/GameHelper';
import images from "../../assets/images/questionImages";
import QuizOption from "./QuizOption";

export default class Quiz extends Component<{}>{
  constructor(props){
    super(props); 

    this.state = {
      quiz: GameHelper.getActualQuiz(),
      currentQuestionId: GameHelper.getActualQuestionId(),
      currentQuestion: GameHelper.getQuestion(GameHelper.getActualQuestionId()),
      totalQuestions: GameHelper.getQuestions().length,
      options: GameHelper.getAnswers(),
      modalVisible: false,
      answeredCorrect: false,
      attemptsRemaining: 3,
    };
  } 

  _keyExtractor = (item, index) => index.toString();

  _renderOption = ({ item }) => (
    <QuizOption quizOption={item} onPressItem={this._onPressOption} />
  );

  _onPressOption = (quizOption) => {
    console.log("Pressed: ");
    console.log(quizOption);

    const answerCorrect = GameHelper.checkValidAnswer(this.state.currentQuestion, quizOption);

    if(answerCorrect){
      this.setState({answeredCorrect: true});
    }
    else{
      this.setState({answeredCorrect: false});

    }

    this.setState({ modalVisible: true });

  }


  _onRequestClose = () => {
    console.log ('Modal has been closed.');
    //this._hideModals();
  }

  _onDismiss = () => {
    console.log ('Modal has been dismissed.');
    //  Quiz answered so move to the next
  }

  _onShow = () => {
    console.log ('Modal has been shown.');
  }

  _hideModals() {
    this.setState({modalVisible: false});
  }

  moveNext = () => {

    //store result of users answer
    GameHelper.updateQuizStatus(this.state.answeredCorrect);
    //go to next question
    GameHelper.moveNextQuestion();
    
    //more questions
    if(GameHelper.moreQuestions()){
      this.props.navigation.push('Quiz');
    }
    //no more, go to result (home for now)
    else{
      this.props.navigation.navigate("Home");
    }

  }

  renderResult = () => {
    const prompt = this.state.answeredCorrect ? "Great job!" : "You're close!";
    const buttonText = this.state.answeredCorrect ? "Next Question" : "Try Again";

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={(this.state.modalVisible)}
        onRequestClose={this._onRequestClose}
        onDismiss={this._onDismiss}
        onShow={this._onShow}
        >
          <View style={[styles.modalContainer, {backgroundColor: this.state.answeredCorrect ? '#D1FFE6' : '#FFE1E1'}]}>
            <View style={styles.resultContainer}>
              <Text style={{ color: this.state.answeredCorrect ? '#27F183' : '#FF5D5D'}}>{prompt}</Text>
              <TouchableNativeFeedback style={[styles.resultButton, {backgroundColor: this.state.answeredCorrect ? '#27F184' : '#FFFFFF'}]}
                  onPress={() => {
                    if(this.state.answeredCorrect || this.state.attemptsRemaining == 0){
                      return this.moveNext();
                    }
                    else{
                      return this._hideModals();
                    }
                  }}>
                    <Text style={styles.resultText}>{buttonText}</Text>
              </TouchableNativeFeedback>
            </View>

          </View>
      </Modal>
    );
  };

  render() {
    
    const {quiz, currentQuestionId, currentQuestion, totalQuestions, options } = this.state;

    return (
      <View style={styles.container}>
        <Header header={quiz.name} />

          <View style={styles.questionContainer}>
            <View style={styles.text}>
              <Text style = {styles.questionNumber}>Question {currentQuestionId + 1}</Text>
              <Text style = {styles.questionText}>{currentQuestion.question}</Text>
            </View>
            <Image style={styles.questionImage} source={images.question} />
          </View>

          <View style={styles.optionsContainer}>
            <FlatList
              data={options}
              renderItem={this._renderOption}
              keyExtractor={this._keyExtractor}
              onPressItem={this._onPressOption}
              scrollEnabled={false}
              numColumns={2}
            />

          </View>

        {/* {this.renderResult()} */}
      </View>
    );

  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },

  questionContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    alignItems: 'flex-start',
  },

  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
  },

  text: {
    marginVertical: 20,
  },

  questionNumber: {
    color: '#7657FE',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19,
    marginBottom: 10,
  },

  questionText: {
    fontSize: 20,
    color: '#313131',
    fontWeight: 'bold',
    lineHeight: 23,
  },

  questionImage: {
    flex: 3,
    width: '100%',
  },

  modalContainer: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  resultContainer: {
    width: '85%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  resultButton: {
    width: '100%',
    maxHeight: '45%',
    borderRadius: 36,
    overflow: 'hidden',
    borderColor: '#FFFFFF',
    marginBottom: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultText: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  }
});
