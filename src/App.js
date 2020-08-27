import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Broken from './components/Broken'
import NavBar from './components/navBar'
import Pick from './components/Pick'
import Forget from './components/forget'
import Return from './components/return'
function App() {
  return (
    <div >
    
    <BrowserRouter>   

   <NavBar />
   <Route exact path="/" component={Pick} />
   <Route path="/broken" component={Broken} />
   <Route path="/forgot" component={Forget} />
   <Route path="/return" component={Return} />




   
    </BrowserRouter>
 
    </div>
  );
}

export default App;
