// IndexScreen.js
import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button
        title='Add Post'
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Feather name='trash' style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row:{
    margin: 5,
    marginTop: 10,
    paddingHorizontal: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 15
  },
  title: {
    fontSize: 24,
  },
  icon:{
    fontSize: 24,
  }
});

export default IndexScreen;
