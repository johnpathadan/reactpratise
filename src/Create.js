import { useState } from "react";
import { useHistory } from 'react-router-dom'; //added code

const Create = () => {
    
    const[title, setTitle] = useState('');
    
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    const[isPending, setIsPending] = useState(false); 
    const history = useHistory(); //added code, go back and forth or redirect the user

    const handleSubmit = (e)=>{  
        e.preventDefault(); 
        const blog = {title, body, author}; 

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {  
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(blog) 
            
        }).then(()=>{
            console.log('New Blog added');
            setIsPending(false);
            //history.go(-1); //go back 1 page in history
            //here we are redirecting the user back to homepage
            
        }); 
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value = {title} 
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <label>Blog body:</label>
                    <textarea
                        required
                        value = {body}
                        onChange={(e)=> setBody(e.target.value)}
                    >

                    </textarea>
                    <label>Blog author:</label>
                    <select
                        value = {author}
                        onChange = {(e)=>setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                   
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Adding Blog...</button>}
                    <p>{title}</p> 
                    
                    <p>{body}</p>
                    <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;