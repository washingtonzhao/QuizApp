import React, { Component } from "react";
import { StyleSheet, View, Text, Image,Button } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackIcon from 'react-native-vector-icons/MaterialIcons';



var jsonData = require('./assets/studentData.json');
var name=jsonData.name;
var country=jsonData.country;
var budget=jsonData.budget;
var budget1=jsonData.budget1;
var budget2=jsonData.budget2;
var budget3=jsonData.budget3;


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



export default class QuizAccessPage extends Component<Props> {

render() {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
        <BackButton screenName="ProfileScreen" />
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

      <View style={styles.mainbox}>
        <Text style={styles.subjecttitle}>Budgeting basics</Text>
        <View style={styles.progressrect}>
          <Progress.Bar progress={budget/5} height={11} width={null} color={'#FFFFFF'} borderColor={'#a8d145'}/>
        </View>
        <View style={styles.quiz1boxStack}>
          <View style={styles.quiz1box}>
            <Text style={styles.quiz1text}>Quiz 1</Text>
          </View>
          <View style={styles.levelbox}>
            <Text style={styles.budget1}>{budget1}</Text>
          </View>
        </View>
        <View style={styles.quiz1boxStack}>
          <View style={styles.quiz1box}>
            <Text style={styles.quiz1text}>Quiz 2</Text>
          </View>
          <View style={styles.levelbox}>
            <Text style={styles.budget1}>{budget2}</Text>
          </View>
        </View>
        <View style={styles.quiz1boxStack}>
          <View style={styles.quiz1box}>
            <Text style={styles.quiz1text}>Quiz 3</Text>
          </View>
          <View style={styles.levelbox}>
            <Text style={styles.budget1}>{budget3}</Text>
          </View>
        </View>
        
      </View>
      


      </View>

      
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#7657FE",
  },
  rect: {
    top: 0,
    left: 0,
    width:  Dimensions.get('window').width,
    height: 320,
    position: "absolute",
    backgroundColor: "#7657FE",
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
    position: "absolute",
    color:"#7657FE",
  },
  
  mainbox: {
    width: 345,
    height: 260,
    backgroundColor: "#a8d145",
    marginTop: 440,
    marginLeft: 30,
    borderRadius:10
  },
  subjecttitle: {
    fontFamily: "roboto-regular",
    color: "white",
    fontSize: 25,
    fontWeight:"bold",
    marginTop: 25,
    marginLeft: 13
  },
  progressrect:{
    width: 310,
    borderColor:"#a8d145",
    borderWidth:2,
    height:15,
    left:12,
    top:4,
    borderRadius:30,
    backgroundColor: "#d5e9a4",
  },
  quiz1box: {
    top: 5,
    left: 0,
    width: 305,
    height: 41,
    position: "absolute",
    backgroundColor: "white",
    borderRadius:10,
  },
  quiz1text: {
    fontFamily: "roboto-regular",
    color: "#7657FE",
    fontWeight:"bold",
    marginTop: 13,
    marginLeft: 13
  },
  levelbox: {
    top: 5,
    left: 77,
    width: 228,
    height: 41,
    position: "absolute",
    backgroundColor: "#f2f2f2",
    borderRadius:10,
    
  },
  budget1: {
    fontFamily: "roboto-regular",
    color: "#7657FE",
    fontWeight:"bold",
    marginTop: 13,
    textAlign:"center"
  },
  quiz1boxStack: {
    width: 241,
    height: 41,
    marginTop: 12,
    marginLeft: 16
  },
  

  
});


