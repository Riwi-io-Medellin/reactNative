import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ScrollViewScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        // scrollEnabled={false}
        // horizontal={true}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>Este es un ejemplo de ScrollView</Text>
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>Elemento {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  box: {
    backgroundColor: '#4CAF50',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ScrollViewScreen;

