import {  useContext } from 'react'

import BlogContext from '../../context/blog_context/BlogContext'

const Blog = ({blog,bgColor}) => {


    const { DeleteBlog , LikeBlog , Get_Post_By_Id } = useContext(BlogContext)

    const { title , author , content , like_state , _id } = blog

    const deleteBlog = ()=>{
        DeleteBlog(_id)
    }

    const editBlog = ()=>{
        Get_Post_By_Id(_id)
    }

    const likeBlog = ()=>{
        LikeBlog(_id)
    }

    return (
        <div style={{ background: bgColor===0 ? 'grey' :'white' }}>
            {blog._id}
            <h1>Title : {title}</h1>
            <p>Author : {author}</p>
            <p>Content : {content}</p>
            <h2>Like State : {like_state===true ? 'True' : 'False'}</h2>

            <button onClick={editBlog}> Edit </button>

            <button onClick={likeBlog}> Like: {like_state} </button>

            <button onClick={deleteBlog}> Delete </button>
        </div>
    )
}

export default Blog
