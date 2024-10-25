import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Item {
  id: string;
  title: string;
}

const DATA: Item[] = [
  { id: '1', title: 'Elemento 1' },
  { id: '2', title: 'Elemento 2' },
  { id: '3', title: 'Elemento 3' },
  { id: '4', title: 'Elemento 4' },
  { id: '5', title: 'Elemento 4' },
  { id: '6', title: 'Elemento 4' },
  { id: '7', title: 'Elemento 4' },
  { id: '8', title: 'Elemento 4' },
  { id: '9', title: 'Elemento 4' },
  { id: '10', title: 'Elemento 4' },
  { id: '11', title: 'Elemento 4' },
  { id: '12', title: 'Elemento 4' },
];

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.title}>elementos adicional</Text>
    <Icon name="add-outline" size={30} color="#900" />
  </View>
);

const FlatListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{width: '90%', height: 1, backgroundColor: 'red'}} />}
        // numColumns={3}
        // horizontal={true}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default FlatListScreen;

