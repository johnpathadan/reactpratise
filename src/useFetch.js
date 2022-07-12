import { useEffect, useState } from "react";
//place all of the functionality that we need to fetch data excatly as we did inside Home.js
//here we will create a function to hold the code in

const useFetch = (url) =>{
    //here we need to import useEffect, and register all of the states as well
    //Here we have imported the state
    //Now we need to import useState and useEffect as well
    // const [blogs, setBlogs] = useState(null);
    //here we changed it to data setData to make the function universal, not just for blogs
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //here we need to import useEffect, and register all of the states as well
    useEffect(() => {
        setTimeout(() => {
          fetch(url) //here we changed the link to url variable
          .then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
          })
          .then(data => { //this is a local data parameter, not to be confused with data in setData
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          })
        }, 1000);
      }, [])
      return {data, isPending, error}
}

export default useFetch;