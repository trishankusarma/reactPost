import {  useContext, useState , useEffect } from 'react'

import BlogContext from '../../context/blog_context/BlogContext'
import Blog from './blog'

const Blogs = () => {

    const { blogs } = useContext(BlogContext)

    const [ blog_s , setBlog_s ] = useState([])

    useEffect(async () => {

           await setBlog_s(blogs)

    }, [blogs])

    return (
        <div>

            {blog_s.map((blog,index)=>{
                return(
                    <Blog blog={blog} key={blog._id} bgColor = {index%2} />
                )})}
        </div>
    )
}

export default Blogs
