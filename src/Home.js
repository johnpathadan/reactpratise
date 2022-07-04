import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);
    return (
        <div className="homePage">
            < BlogList blogs={blogs} title="All Blogs!" />
            {/* Here we are filtering blogs with author as just mario */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario's blogs"/>
        </div>
    );
}
 
export default Home;