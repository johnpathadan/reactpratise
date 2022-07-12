
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //added code


function App() {
  
  return(
    // <Router> </Router> added code
    <Router>  
    <div className='App'>
      {/* Navbar will appear for every single route as it is outside Switch */}
      < Navbar/>
      <div className='content'>
        {/* <Home/>  replaced with Switch, Switch makes sure only 1 route shows at any given time*/}
        <Switch>
          {/* Let's create a route for the homepage, path varies like path='/aboutus', path='/contact' */}
          {/* path='/' means initial route */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;


// import Navbar from './Navbar';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="content">
//           <Switch>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;