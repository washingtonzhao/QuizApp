/* @flow */

import React, { useState } from 'react';
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

export default function Quiz({ route, navigation }){
    //load questions
    const { quiz } = route.params;
    const questions = quiz.questions;
    //hooks
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [numTries, addTry] = useState(1);
    const [answerCorrect, setAnswer] = useState(false);
    const [modalShown, showModal] = useState(false);
    const [modalText, setText] = useState(null);

    const _onPressOption = (quizOption) => {
      const correctOption = questions[currentQuestion]['quiz_option_code'];
      setAnswer(quizOption.code == correctOption);
      const correct = quizOption.code == correctOption;
      addTry(numTries + 1);
      console.log(numTries);
      
      if(correct){
        setText("Great job!");
        setScore(score+1);
      }

      else{
        if(numTries === 3){
          setText("You almost got it :( " + questions[currentQuestion]['quiz_answer']);
        }
        else{
          setText("Close! You have " + (3-numTries) + " attempts remaining!");
        }
      }
      showModal(true);
    }

    const _keyExtractor = (item, index) => index.toString();

    const _renderOption = ({ item }) => (
      <QuizOption quizOption={item} onPressItem={_onPressOption} />
    );

  

    return(
      <View style={styles.container}>
        <Header header={ quiz.name } />

        <View style={styles.questionContainer}>
          <View style={styles.text}>
            <Text style = {styles.questionNumber}>Question {currentQuestion + 1}</Text>
            <Text style = {styles.questionText}>{questions[currentQuestion].question}</Text>
          </View>
          <Image style={styles.questionImage} source={images.question} />
        </View>

        <View style={styles.optionsContainer}>
          <FlatList
            data={questions[currentQuestion].options}
            renderItem={_renderOption}
            keyExtractor={_keyExtractor}
            scrollEnabled={false}
            numColumns={2}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalShown}
        >
            <View style={[styles.modalContainer, {backgroundColor: answerCorrect ? '#D1FFE6' : '#FFE1E1'}]}>
              <View style={styles.resultContainer}>
                <Text style={{ color: answerCorrect ? '#27F183' : '#FF5D5D'}}>{modalText}</Text>
                <TouchableNativeFeedback style={[styles.resultButton, {backgroundColor: answerCorrect ? '#27F184' : '#FFFFFF'}]}
                    onPress={() => {
                      if(answerCorrect || numTries == 4){
                        //move to next question
                        const numQuestions = questions.length;
                        addTry(1);
                        setAnswer(false);
                        setText(null);

                        //more questions
                        if(currentQuestion + 1 < numQuestions){
                          setCurrentQuestion(currentQuestion+1);
                        }
                        else{
                          const quizScore = score;
                          setCurrentQuestion(0);
                          setScore(0);
                          addTry(0);
                          setAnswer(false);
                          showModal(false);
                          setText(null);
                          navigation.navigate("Results",{ score: quizScore, quiz:quiz});
                        }
                      }

                      showModal(false);
                    }}>
                      <Text style={styles.resultText}>{answerCorrect || numTries == 4 ? "Next Question": "Try Again"}</Text>
                </TouchableNativeFeedback>
              </View>

            </View>
        </Modal>
      </View>
    )

} 




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
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
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

/* <View style={styles.container}>
//         <Header header={quiz.name} />

//           <View style={styles.questionContainer}>
//             <View style={styles.text}>
//               <Text style = {styles.questionNumber}>Question {currentQuestionId + 1}</Text>
//               <Text style = {styles.questionText}>{currentQuestion.question}</Text>
//             </View>
//             <Image style={styles.questionImage} source={images.question} />
//           </View>

//           {/* <View style={styles.optionsContainer}> */
//             <FlatList
//               data={options}
//               renderItem={this._renderOption}
//               keyExtractor={this._keyExtractor}
//               // onPressItem={this._onPressOption}
//               // scrollEnabled={false}
//               // numColumns={2}
//             />


//         {/* {this.renderResult()} */}
//       </View> */}

// export default class Quiz extends Component{
//   constructor(props){
//     super(props); 

//     this.state = {
//       quiz: GameHelper.getActualQuiz(),
//       currentQuestionId: GameHelper.getActualQuestionId(),
//       currentQuestion: GameHelper.getQuestion(GameHelper.getActualQuestionId()),
//       totalQuestions: GameHelper.getQuestions().length,
//       options: GameHelper.getAnswers(),
//       modalVisible: false,
//       answeredCorrect: false,
//       attemptsRemaining: 3,
//     };
//   } 

//   _keyExtractor = (item, index) => index.toString();

//   _renderOption = ({ item }) => (
//     <QuizOption quizOption={item} onPressItem={this._onPressOption} />
//   );

//   _onPressOption = (quizOption) => {
//     console.log("Pressed: ");
//     console.log(quizOption);

//     const answerCorrect = GameHelper.checkValidAnswer(this.state.currentQuestion, quizOption);

//     if(answerCorrect){
//       this.setState({answeredCorrect: true});
//     }
//     else{
//       this.setState({answeredCorrect: false});

//     }

//     this.setState({ modalVisible: true });

//   }


//   _onRequestClose = () => {
//     console.log ('Modal has been closed.');
//     //this._hideModals();
//   }

//   _onDismiss = () => {
//     console.log ('Modal has been dismissed.');
//     //  Quiz answered so move to the next
//   }

//   _onShow = () => {
//     console.log ('Modal has been shown.');
//   }

//   _hideModals() {
//     this.setState({modalVisible: false});
//   }

//   moveNext = () => {

//     //store result of users answer
//     GameHelper.updateQuizStatus(this.state.answeredCorrect);
//     //go to next question
//     GameHelper.moveNextQuestion();
    
//     //more questions
//     if(GameHelper.moreQuestions()){
//       this.props.navigation.push('Quiz');
//     }
//     //no more, go to result (home for now)
//     else{
//       this.props.navigation.navigate("Home");
//     }

//   }

//   renderResult = () => {
//     const prompt = this.state.answeredCorrect ? "Great job!" : "You're close!";
//     const buttonText = this.state.answeredCorrect ? "Next Question" : "Try Again";

//     return (
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={(this.state.modalVisible)}
//         onRequestClose={this._onRequestClose}
//         onDismiss={this._onDismiss}
//         onShow={this._onShow}
//         >
//           <View style={[styles.modalContainer, {backgroundColor: this.state.answeredCorrect ? '#D1FFE6' : '#FFE1E1'}]}>
//             <View style={styles.resultContainer}>
//               <Text style={{ color: this.state.answeredCorrect ? '#27F183' : '#FF5D5D'}}>{prompt}</Text>
//               <TouchableNativeFeedback style={[styles.resultButton, {backgroundColor: this.state.answeredCorrect ? '#27F184' : '#FFFFFF'}]}
//                   onPress={() => {
//                     if(this.state.answeredCorrect || this.state.attemptsRemaining == 0){
//                       return this.moveNext();
//                     }
//                     else{
//                       return this._hideModals();
//                     }
//                   }}>
//                     <Text style={styles.resultText}>{buttonText}</Text>
//               </TouchableNativeFeedback>
//             </View>

//           </View>
//       </Modal>
//     );
//   };

//   render() {
    
//     const {quiz, currentQuestionId, currentQuestion, totalQuestions, options } = this.state;

//     return (
//       <View style={styles.container}>
//         <Header header={quiz.name} />

//           <View style={styles.questionContainer}>
//             <View style={styles.text}>
//               <Text style = {styles.questionNumber}>Question {currentQuestionId + 1}</Text>
//               <Text style = {styles.questionText}>{currentQuestion.question}</Text>
//             </View>
//             <Image style={styles.questionImage} source={images.question} />
//           </View>

//           {/* <View style={styles.optionsContainer}> */}
//             <FlatList
//               data={options}
//               renderItem={this._renderOption}
//               keyExtractor={this._keyExtractor}
//               // onPressItem={this._onPressOption}
//               // scrollEnabled={false}
//               // numColumns={2}
//             />


//         {/* {this.renderResult()} */}
//       </View>
//     );

//   }
// };