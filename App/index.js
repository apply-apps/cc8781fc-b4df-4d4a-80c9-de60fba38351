// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, Button, StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItem = () => {
    setItems([...items, { name: itemName, description: itemDescription, price: itemPrice }]);
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Market</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
        />
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              placeholderTextColor="#CCC"
              value={itemName}
              onChangeText={setItemName}
            />
            <TextInput
              style={styles.input}
              placeholder="Item Description"
              placeholderTextColor="#CCC"
              value={itemDescription}
              onChangeText={setItemDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Item Price"
              placeholderTextColor="#CCC"
              value={itemPrice}
              onChangeText={setItemPrice}
              keyboardType='numeric'
            />
            <TouchableOpacity style={styles.button} onPress={addItem}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  itemName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    marginVertical: 5,
  },
  itemPrice: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8B00FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  buttonClose: {
    backgroundColor: '#8B00FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default App;