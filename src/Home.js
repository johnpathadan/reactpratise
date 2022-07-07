import { useState, useEffect } from "react"; //useEffect added
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);

    //here we have created a state
    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran');
    }, []);
    

    return (
        <div className="homePage">
            < BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
        </div>
    );


}
 
export default Home;