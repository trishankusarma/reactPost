import './App.css';

import Header from './components/header/header' 
import AddBlog from './components/addBlog/add'
import Blogs from './components/Blogs/blogs'

import BlogState from './context/blog_context/BlogState'

function App() {
  
  return (

     <BlogState>

         <Header />
         <AddBlog />
         <Blogs />
     </BlogState>    
  );
}

export default App;
