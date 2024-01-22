import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen =  ({ route, navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  );


  return (
    
    <View style={styles.container}>
      <TouchableOpacity 
        style={{ alignItems:'center'}}
        onPress={() => navigation.navigate('EditScreen', { id: blogPost.id })}
      >
        <View style={styles.button}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15,}}>Edit Blog Post</Text>
        </View>
      </TouchableOpacity>

      <Text style={{ fontWeight: 'bold', fontSize: 28}}>Title:</Text>
      <Text style={{ fontSize: 24, marginLeft: 10}}>{blogPost.title}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 28, marginTop: 20}}>Content:</Text>
      <Text style={{ fontSize: 24, marginLeft: 10}}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    margin: 15,
    marginTop: 10,
  },
  button:{
    alignItems: 'center',
    justifyContent:'center',
    width: "auto",
    height: "auto",
    padding: 10,
    backgroundColor: '#0088DD',
    borderWidth: 2,
    borderRadius: 20,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 24,
  },
  icon:{
    fontSize: 24,
  }
});

export default ShowScreen;
