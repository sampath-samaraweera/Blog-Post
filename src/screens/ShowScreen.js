import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen =  ({ route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  );


  return (
      <View>
          <Text>{blogPost.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  row:{
    margin: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  icon:{
    fontSize: 24,
  }
});

export default ShowScreen;
