import { useState , useContext , useEffect } from 'react'

import BlogContext from '../../context/blog_context/BlogContext'

const Add = () => {

    const { AddBlog , lastId , specific_blog , EditBlog } = useContext(BlogContext)

    const [ specificBlog , setSpecificBlog ] = useState(null)

    useEffect(()=>{

        setSpecificBlog(specific_blog)

        if(specific_blog){
        
            setPost({
                title : specific_blog[0].title ,
                author : specific_blog[0].author ,
                content : specific_blog[0].content  ,
                like_state : specific_blog[0].like_state ,
                _id : specific_blog[0]._id  
            })    
        }

    },[specific_blog])

    const [ post , setPost ] = useState({
        
        title : ''  ,
        author : '' ,
        content : ''  ,
        like_state :  false ,
        _id : lastId    
    })

    console.log(post)

    const { title , author , content } = post 

    const handleChanges = (e)=>{

        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = async (e)=>{
        
        e.preventDefault()

        if(specificBlog === null){

           await AddBlog(post) 

           await setPost({
            ...post,
            title:'',
            author:'',
            content:'',
            _id:lastId+1
           })
        
           return;
        
        }

        await EditBlog(post,post._id)

        await setSpecificBlog(null)

        await setPost({
            ...post,
            title:'',
            author:'',
            content:'',
            _id:lastId
        })
    }

    return (
        <div>
            <form onSubmit = {onSubmit} >
                <input 
                   type = 'text'
                   name = 'title'
                   placeholder = 'Title'
                   onChange = {handleChanges}
                   value = {title}
                />
                <input 
                   type = 'text'
                   name = 'author'
                   placeholder = 'Author Name'
                   onChange = {handleChanges}
                   value = {author}
                />
                <input 
                   type = 'text'
                   name = 'content'
                   placeholder = 'Content'
                   onChange = {handleChanges}
                   value = {content}
                />
                <button type='submit'> 
                    {specificBlog === null ? 'ADD' : 'EDIT' }
                </button>
            </form>
        </div>
    )
}

export default Add
