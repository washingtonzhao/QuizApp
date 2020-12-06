import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class QuizOption extends Component<{}> {
  constructor(props){
    super(props);
  }

  _onPress = () => {
    console.log('QuizOptionItem Pressed : ');
    console.log(this.props.quizOption);
    this.props.onPressItem(this.props.quizOption);
  };

  render() {
    const { quizOption } = this.props;

    return (
      <TouchableOpacity
        onPress={this._onPress} style={styles.quizOptions}
      >
          <Text style={styles.optionText}>{quizOption.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  quizOptions:{
    backgroundColor: '#FFFFFF',
    borderColor: '#D4D4D4',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 11,
    height: 63,
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  optionText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    color: '#313131',
  },

});
