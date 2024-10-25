import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Alert } from 'react-native';

const TouchablesScreen = () => {
  const handlePress = (touchableType: string) => {
    Alert.alert(`Presionaste ${touchableType}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('TouchableOpacity')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.button}
        underlayColor="red"
        onPress={() => handlePress('TouchableHighlight')}
      >
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback
        onPress={() => handlePress('TouchableWithoutFeedback')}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TouchablesScreen;

