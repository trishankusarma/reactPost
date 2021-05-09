import { useReducer } from 'react'

import BlogReducer from './BlogReducer'

import BlogContext from './BlogContext'

import {
   ADD , EDIT , DELETE , LIKE_POST , GET_POST_BY_ID, CLEAR_BLOG
} from '../types'

const BlogState = ({children}) =>{
    
    const initialState = {
        blogs:[],
        lastId:0,
        specific_blog : null
    }
    
    const [state, dispatch] = useReducer( BlogReducer , initialState )
    
    const AddBlog = (post)=>{
       
        dispatch({
               type : ADD,
               payload : post
        })
    }

    const Get_Post_By_Id = (_id)=>{
         
        dispatch({
            type : GET_POST_BY_ID,
            payload : _id
        })
    }

    const Clear_Blog = ()=>{
         
        dispatch({
            type : CLEAR_BLOG
        })
    }

    const EditBlog = (post,_id)=>{
        
        dispatch({
                type : EDIT,
                payload : {
                    post,
                    _id
                }
        })
    }

    const DeleteBlog = (_id)=>{
       
        dispatch({
               type : DELETE ,
               payload : _id
        })
    }

    const LikeBlog =  (_id)=>{

        dispatch({
                type : LIKE_POST ,
                payload : _id
        })
    }
    
    return(
        <BlogContext.Provider
         
          value = {{
        
             AddBlog,
             EditBlog,
             DeleteBlog,
             LikeBlog,
             Clear_Blog,
             Get_Post_By_Id,
             blogs:state.blogs,
             lastId:state.lastId,
             specific_blog:state.specific_blog
           }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export default BlogState