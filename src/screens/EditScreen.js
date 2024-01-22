import React,{ useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen =  ({ route,navigation }) => {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === id
  );

  return (
    <BlogPostForm
      initialValue={{title: blogPost.title , content: blogPost.content}}
      onSubmit={(title,content) => {
        editBlogPost(id, title, content, () => navigation.pop());
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

export default EditScreen;
