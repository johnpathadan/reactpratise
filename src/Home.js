import { useState, useEffect } from "react"; 
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{ 
        //to simulate the loading, we are using setTimneOut around fetch
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then(res =>{  
                
                return res.json(); 
                
            })
            .then(data=>{
                setBlogs(data);
                setIsPending(false); //added code
            })
        }, 1000);
        
    }, []); 
    

    return (
        <div className="homePage">
            {/* added code below */}
            {isPending && <div>Loading...</div>}  
            { blogs && < BlogList blogs={blogs} title="All Blogs!"/>}
            
            
        </div>
    );


}
 
export default Home;