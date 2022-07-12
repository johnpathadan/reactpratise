import { useState } from "react";

const Create = () => {
    // whenever the user inputs a value, we need to track and store it in some state inside
    const[title, setTitle] = useState('');
    //in the above code, we need to associate the value to the value of the input
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('mario');
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value = {title} //associating the value to the value of the input
                    onChange={(e)=> setTitle(e.target.value)}//Whenever a change happens, setState needs to be trigerred
                    //in the above code, e is the event, target s the entire input code, value is what the user typed in
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
                    <button>Add Blog</button>
                    <p>{title}</p> 
                    {/* this is to see the live updates */}
                    <p>{body}</p>
                    <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;