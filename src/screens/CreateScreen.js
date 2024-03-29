import React,{ useContext } from 'react';
import { StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen =  ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title,content) =>{
        addBlogPost(title,content, () => navigation.navigate('Index'))
      }}
    />
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
