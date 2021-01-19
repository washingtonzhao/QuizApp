import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
} from 'react-native';

import Header from './Header';
import GameHelper from './services/GameHelper';
import localGameList from './assets/quizData.json';
import QuizList from './QuizList';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type Props = {};

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to Profile`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}


export default class QuizNav extends Component<Props> {

    constructor(props){
        super(props); 
        
        this.state = {
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            introModalVisible: false,
        };
    }

    
    componentDidMount() {
      this._makeLocalRequestForGameList();
    }
  
    _makeLocalRequestForGameList = () => {

      this.setState({ error: null });
      this.setState({ quizList: localGameList.quizzes });

    };

    _keyExtractor = (item, index) => index.toString();

    _setModalVisible = (modalVisible) => {
      this.setState({ introModalVisible: modalVisible });
    }
    _renderItem = ({item}) => (
        <QuizList
            quiz={item}
            onPressItem={this._onPressItem}
        />
    );


    _onPressItem = (item) => {
        this.setState({ introModalVisible: false });

        this.props.navigation.navigate("Quiz", { quiz: item });
    };

    
    render() {
        return (
          <View style={styles.container}>
            <Header header="Key Learning" />
            <View style={styles.listContainer}>
              <View >
                <GoToButton screenName="ProfileScreen" />
                <Text style={styles.quizText}>Quizzes</Text>
              </View>
              <FlatList
                data={this.state.quizList}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                />
          </View>
          </View>
        );
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },

    listContainer : {
      width: '100%',
      textAlign: 'left',
      paddingTop: 25,
      width: '90%',
    },

    quizText: {
      fontSize: 20,
      lineHeight: 23,
      color: '#313131',
      fontWeight: 'bold',
      paddingBottom: 10,
      marginTop:10,
    },
    
    imageBackground : {
      flex: 1,
      height: '100%',
      width: '100%',
    },

    headerTitle : {
      fontWeight: '300',
      color: '#ffffff',

      fontSize: 28,
      fontWeight: '900',

    },


  });
