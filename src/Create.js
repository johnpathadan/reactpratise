import { useState } from "react";

const Create = () => {
    
    const[title, setTitle] = useState('');
    
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    const[isPending, setIsPending] = useState(false); //to make a loading object after sending the blod data to JSON


    const handleSubmit = (e)=>{  
        e.preventDefault(); 
        const blog = {title, body, author}; 

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {  //added code
            method: 'POST',
            headers: {"Content-Type": "application/json"}, //to provide the data type(here JSON data)
            body: JSON.stringify(blog) //to make the body string
            //JSON will automatically add an id
        }).then(()=>{
            console.log('New Blog added');
            setIsPending(false);
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
                    {/* under, we need to add one button if isPending is false, that is the Add
                    Blog button, and a different one, if isPending is true */}
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