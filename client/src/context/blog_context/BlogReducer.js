import {
    ADD , EDIT , DELETE , LIKE_POST , GET_POST_BY_ID , CLEAR_BLOG
} from '../types'

const BlogReducer = ( state , { type , payload } )=>{

    switch(type){
        
        case ADD :
            return{
               ...state,
               blogs : [...state.blogs,payload],
               lastId : state.lastId+1
            }
        case GET_POST_BY_ID :
           
            return{
               ...state,
               specific_blog : state.blogs.filter(blog=> blog._id === payload  )
            }
        case CLEAR_BLOG :
           
            return{
                ...state,
               specific_blog : null
            }
        case DELETE :
           
            return{
               ...state,
               blogs : state.blogs.filter(blog=> blog._id !== payload  )
            }
        case EDIT :
           
            return{
                ...state,
                blogs : state.blogs.map(blog=>(
                 
                    blog._id === payload._id
                       ? payload.post
                       : blog
                ))
            }
        case LIKE_POST :
            
            return{
               ...state,
               blogs : state.blogs.map(blog=>(
                   
                   blog._id === payload
                     ? {
                         ...blog,
                         like_state:!blog.like_state  
                     }
                     : blog
               ))
            }
        default:
            return state
    }
}

export default BlogReducer