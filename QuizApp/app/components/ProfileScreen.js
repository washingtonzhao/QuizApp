import React, { Component } from "react";
import { StyleSheet, View, Text, Image,Button,SafeAreaView, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackIcon from 'react-native-vector-icons/MaterialIcons';

var jsonData = require('./assets/studentData.json');
var name=jsonData.name;
var country=jsonData.country;
var budget=parseInt(jsonData.budget);
var resume=parseInt(jsonData.resume);
var health=parseInt(jsonData.health);

function GoToQuiz({ screenName }) {
  const navigation = useNavigation();

  return (
    
    <View style={{position: 'absolute', right: -60}}>
    <Button
      title={`Show Quizzes`}
      onPress={() => navigation.navigate(screenName)}
    />
    </View>
  );
}


function BackButton({ screenName }) {
  const navigation = useNavigation();
  return(
    <View style={{position: 'absolute', left:20,}}>
  <BackIcon.Button 
    color="white"
    backgroundColor="#7657FE"
    name="arrow-back"
    size={32}
    onPress={() => navigation.navigate(screenName)}
  >
   
  </BackIcon.Button>
  </View>
);
}

function HomeButton({ screenName }) {
  const navigation = useNavigation();
  return(
    <View style={{position: 'absolute', right:15,}}>
  <BackIcon.Button 
    color="white"
    backgroundColor="#7657FE"
    name="home"
    size={32}
    onPress={() => navigation.navigate(screenName)}
  >
   
  </BackIcon.Button>
  </View>
);
}


export default class ProfileScreen extends Component<Props> {

render() {
  return (
    <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
      <View style={styles.rectStack}>
        <View style={styles.rect}>
        <BackButton screenName="QuizNav" />
        <HomeButton screenName="QuizNav" />
          <Text style={styles.userName}>{name}</Text>
          <View style={styles.iconStack}>
            <Icon name="location" style={styles.icon}></Icon>
            <Text style={styles.location}>{country}</Text>
          </View>
        </View>
        
        <Image
          source={require("../../assets/images/humanpic.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.undefined}></View>



      <View style={styles.subject1Rect}>
      <View style={styles.recttopStack}>
        <View style={styles.recttop}>
        <View style={styles.budgetingBasicsRow}>
          <Text style={styles.budgetingBasics}>Budgeting basics</Text>
          <GoToQuiz screenName="QuizAccessPage" />
          {/* <Text style={styles.seeQuizzes} onPress={() => GoToQuiz()}>See Quizzes</Text> */}
        </View></View>
        <View style={styles.progressrect1}>
            <Progress.Bar progress={budget/5} height={11} width={null} color={'#FFFFFF'} borderColor={'#a8d145'}/>
          </View>
          </View>
      </View>

      <View style={styles.subject2Rect}>
        <View style={styles.recttopStack}>
          <View style={styles.recttop}>
            <View style={styles.resumeRow}>
              <Text style={styles.resume}>Resume Building</Text>
              <GoToQuiz screenName="ResumeQuizAccessPage" />
            </View>
          </View>
          <View style={styles.progressrect2}>
            <Progress.Bar progress={resume/5} height={11} width={null} color={'#FFFFFF'} borderColor={'#7acbf2'}/>
          </View>
        </View>
      </View>

      <View style={styles.subject3Rect}>
        <View style={styles.recttopStack}>
          <View style={styles.recttop}>
            <View style={styles.healthRow}>
              <Text style={styles.health}>Health & Wellness</Text>
              <GoToQuiz screenName="HealthQuizAccessPage" />
            </View>
          </View>
          <View style={styles.progressrect3}>
            <Progress.Bar progress={health/5} height={11} width={null} color={'#FFFFFF'} borderColor={'#fa8979'}/>
          </View>
        </View>
      </View>
      </ScrollView>

    
  );
}
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  scrollView: {
    height:  Dimensions.get('window').height,
    width: '100%',
    alignSelf: 'center',
    flex: 1
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 800
  },

  rect: {
    top: 0,
    left: 0,
    width:  Dimensions.get('window').width,
    height: 320,
    position: "absolute",
    backgroundColor: "#7657FE"
  },
  userName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 85,
    textAlign: "center",
    fontSize: 50,
    color:"white"
  },
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "white",
    fontSize: 40,
    height: 46,
    width: 40
  },
  location: {
    left: 39,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:25,
    color:'white',
    marginLeft:30,
  },
  iconStack: {
    width: Dimensions.get('window').width,
    height: 46,
    marginLeft: 105
  },
  ellipse: {
    top: 318,
    left: 125,
    width: 140,
    height: 128,
    position: "absolute"
  },
  image: {
    top: 260,
    left: 145,
    width: 130,
    height: 130,
    borderRadius: 50,
    alignItems: 'center',
    position: "absolute"
  },
  rectStack: {
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 380,
    position: "absolute"
  },
  undefined: {},
  
  subject1Rect: {
    top: 450,
    left: 25,
    width: 370,
    height: 100,
    position: "absolute",
    backgroundColor: "#a8d145",
    borderRadius:10,
    flexDirection: "row"
  },
  budgetingBasics: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:24,
    color:"white",

  },
  seeQuizzes: {
    fontFamily: "roboto-regular",
    marginLeft: 70,
    color:"white",
    fontSize:15
  },
  budgetingBasicsRow: {
    height: 40,
    flexDirection: "row",
    flex: 4,
    width:200,
    marginLeft: 18,
    marginTop: 10,
    borderColor:"white",
  },

  progress: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  progressrect1:{
    width: 320,
    borderColor:"#a8d145",
    borderWidth:2,
    height:15,
    marginTop:53,
    left:18,
    borderRadius:30,
    backgroundColor: "#d5e9a4",
  },


  subject2Rect: {
    top: 560,
    left: 25,
    width: 370,
    height: 100,
    position: "absolute",
    backgroundColor: "#7acbf2",
    borderRadius:10,
    flexDirection: "row"
  },
  resume: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:24,
    color:"white",

  },
  seeQuizzes: {
    fontFamily: "roboto-regular",
    marginLeft: 70,
    color:"white",
    fontSize:15
  },
  resumeRow: {
    height: 40,
    flexDirection: "row",
    flex: 4,
    width:200,
    marginLeft: 18,
    marginTop: 10,
  },

  progress: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  progressrect2:{
    width: 320,
    borderColor:"#7acbf2",
    borderWidth:2,
    height:15,
    marginTop:53,
    left:18,
    borderRadius:30,
    backgroundColor: "#a2dbf6",
  },


  subject3Rect: {
    top: 670,
    left: 25,
    width: 370,
    height: 100,
    position: "absolute",
    backgroundColor: "#fa8979",
    borderRadius:10,
    flexDirection: "row"
  },
  health: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize:24,
    color:"white",

  },
  seeQuizzes: {
    fontFamily: "roboto-regular",
    marginLeft: 70,
    color:"white",
    fontSize:15
  },
  healthRow: {
    height: 40,
    flexDirection: "row",
    flex: 4,
    width:200,
    marginLeft: 18,
    marginTop: 10,
  },

  progress: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  progressrect3:{
    width: 320,
    borderColor:"#fa8979",
    borderWidth:2,
    height:15,
    marginTop:53,
    left:18,
    borderRadius:30,
    backgroundColor: "#fcaca1",
  },



  
  recttop: {
    top: -10,
    left: 0,
    width: 284,
    height: 33,
    position: "absolute",
    flexDirection: "row"
  },
  recttopStack: {
    width: 284,
    height: 65,
    marginTop: 18,
    marginLeft: 10
  }
  
  
});


