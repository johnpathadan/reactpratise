import { Link } from "react-router-dom"; //added code
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="http://">Home</a>  change it to below*/ }
                <Link to="/"></Link> 
                {/* Link prevents the request to the server */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;