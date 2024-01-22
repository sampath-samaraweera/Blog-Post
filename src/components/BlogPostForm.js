import React,{ useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm =  ({ onSubmit, initialValue }) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content,setContent] = useState(initialValue.content);

  return (
      <View style={styles.container}>
        <Text>Edit Title:</Text>
        <TextInput 
            style={styles.textInput} 
            value={title} 
            onChangeText={(text) => setTitle(text)}
        />
        <Text>Edit Content:</Text>
        <TextInput 
            multiline 
            style={styles.textInput} 
            value={content} 
            onChangeText={(text) => setContent(text)}
        />
        <TouchableOpacity 
            style={{ alignItems:'center'}}
            onPress={() => onSubmit(title, content)} 
        >
          <View style={styles.button}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18,}}>Save Blog Post</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  }
};

const styles = StyleSheet.create({
  container:{
    margin: 15,
    marginTop: 10,
  },
  button:{
    alignItems: 'center',
    justifyContent:'center',
    width: 90,
    height: 50,
    padding: 10,
    backgroundColor: '#0088DD',
    borderWidth: 2,
    borderRadius: 20,
    
    color: '#FFFFFF',
  },
  textInput:{
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default BlogPostForm;
