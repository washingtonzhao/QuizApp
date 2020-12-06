
//  Stores game data
class GameHelper {

    constructor() {}
  
    static actualQuiz = null;
    static questions = [];
    static answers = [];
    static actualQuestionId = -1;
    static userAnswers = [];
  
    static setActualQuiz(quiz) {
      this.actualQuiz = quiz;
      return;
    }
  
    static getActualQuiz() {
      return this.actualQuiz;
    }
  
    static setQuestions(questions) {
      this.questions = questions;

      return;
    }
  
    static getQuestions() {
      return this.questions;
    }
  
    static getQuestion(question_id) {
      return this.questions[question_id];
    }
    
    static setAnswers(answers){
      this.answers = answers;

      return;
    }
    
    static getAnswers(){
      return this.answers;
    }

    static getAnswer(question_id){
      return this.answers[question_id];
    }

    static setActualQuestionId(actualQuestionId) {
      this.actualQuestionId = actualQuestionId;

      return;
    }
  
    static getActualQuestionId() {
      return this.actualQuestionId;
    }
    
    static getCurrentQuestionImagePath() {
      const currentQuestion = this.questions[this.actualQuestionId];

      return currentQuestion.image;
    }

    //have actual quiz by now
    static generateQuiz() {
      GameHelper.setQuestions(GameHelper.getActualQuiz().questions);
      GameHelper.setActualQuestionId(0);  
    
      return;
    }

    static checkValidAnswer(question, quizOption) {
      if (question.quiz_option_code == quizOption.code) {
        return true;
      } else {
        return false;
      }
    }
  
    static updateQuizStatus(answerCorrect) {
      var quiz = GameHelper.getActualQuiz();
      this.answers[GameHelper.getActualQuestionId()]  = answerCorrect;
    }
  
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
  