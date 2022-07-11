import { useState, useEffect } from "react"; 
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null); //Here we deleted all the states and now set to null

    
    const [name, setName] = useState('mario');

//handle delte function deleted
    useEffect(()=>{ //code added, this will return a promise, so we can use then method
        fetch('http://localhost:8000/blogs')
            .then(res =>{  //this response object is not actually the data, inorder to get the dat
                //we have to do soomething with the response object
                return res.json(); //this pass the json into a JS object for us
                //this will return another promise, because .json() is also async
                //so add another .then block
            })
            .then(data=>{
                setBlogs(data);
            })
        
    }, []); //[] only fire this once on the initial render, not when the data changes
    

    return (
        <div className="homePage">
            {/* there is an error in console @ 4:50, Uncaught TypeError: Cannot read properties of null (reading 'map') */}
            {/* because useState value is null, Bloglist cannot retreive properties, & browser only load once */}
            {/* to mitigate this, use {} around in the next line and add some JS */}
            { blogs && < BlogList blogs={blogs} title="All Blogs!"/>}
            {/* in line 35 this is the logical & operator in react, if 1 parameter doesnt satisfy, it wont
            move to the next one */}
            
        </div>
    );


}
 
export default Home;