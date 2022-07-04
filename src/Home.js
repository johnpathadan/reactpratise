import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);
       

   
    return ( 
        <div className="homePage">
           
        </div>
     );
}
 
export default Home;