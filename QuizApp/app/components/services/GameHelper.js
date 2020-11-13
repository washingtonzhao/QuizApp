
//  Stores game data
class GameHelper {

    constructor() {}
  
    static actualQuiz = null;
    static questions = [];
    static answers = [];
    static actualQuestionId = -1;
    static userAnswers = [];
  
    static setActualQuiz(quiz) {
      return this.actualQuiz  = quiz;
    }
  
    static getActualQuiz() {
      return this.actualQuiz;
    }
  
    static setQuestions(questions) {
      return this.questions = questions;
    }
  
    static getQuestions() {
      return this.questions;
    }
  
    static getQuestion(question_id) {
      return this.questions[question_id];
    }
    
    static setAnswers(answers){
      return this.answers = answers;
    }
    
    static getAnswers(){
      return this.answers;
    }

    static getAnswer(question_id){
      return this.answers[question_id];
    }

    static setActualQuestionId (actualQuestionId) {
      this.actualQuestionId  = actualQuestionId;
    }
  
    static getActualQuestionId () {
      return this.actualQuestionId;
    }
    

    //have actual quiz by now (called in Quiz.js)
    static generateQuiz () {
  
      GameHelper.setQuestions(GameHelper.getActualQuiz().questions);
      GameHelper.setActualQuestionId(0);
      
      var answers = [];
      var questions = GameHelper.getQuestions();
      console.log(questions);
      questions.forEach(item => {
        answers.push(item.quiz_answer);
      });

      GameHelper.setAnswers(answers);
  
    }

    static checkValidAnswer (question, quizOption) {
      if (question.quiz_option_code == quizOption.code) {
        return true;
      } else {
        return false;
      }
    }
  
    // static updateQuizStatus (quizOption) {
    //   var quiz = GameHelper.ge();
    //   this.answers[GameHelper.getActualQuizIdx()]  = GameHelper.checkValidAnswer(quiz, quizOption);
    // }
  
    static moveNextQuestion () {
      GameHelper.setActualQuestionId (GameHelper.getActualQuestionId() + 1);
    }
  
    static moreQuestions () {
      return (GameHelper.getActualQuestionId () < GameHelper.getQuestions().length);
    }
  
    static getCorrectAnswersCount () {
      var countCorrectAnswers = 0;
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i]) {
          countCorrectAnswers ++;
        }
      }
      return countCorrectAnswers;
    }
  
  
  }
  
  export default GameHelper;
  