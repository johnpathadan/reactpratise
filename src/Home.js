
import { useEffect, useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    //This means take the data, call it blogs in this context

  

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;