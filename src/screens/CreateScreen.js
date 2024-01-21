import React,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const CreateScreen =  () => {
    const [title, setTitle] = useState('');
    const [content,setContent] = useState('');

  return (
      <View style={styles.container}>
          <Text>Enter Title:</Text>
          <TextInput style={styles.textInput} value={title} onChangeText={(title) => setTitle('title')}/>
          <Text>Enter Content:</Text>
          <TextInput style={styles.textInput} value={content} onChangeText={(content) => setContent('content')}/>
          <TouchableOpacity style={{ alignItems:'center'}}>
            <View style={styles.button}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18,}}>Add Blog Post</Text>
            </View>
          </TouchableOpacity>
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
  textInput:{
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default CreateScreen;
