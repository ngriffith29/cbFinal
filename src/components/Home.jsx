import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './home.css'




function Home() {

    
  


    return (
    <div className="body">
   <div>
      <Jumbotron className="jumboTron">
        <h1 className="display-5">Welcome to the Chromebook Checkout</h1>
        <p className="lead">Click the button below to exchange your chromebook</p>
        <hr className="my-2" />
       
        <p className="lead">
        <Link to='/broken'>         <Button color="primary">Click Here to start</Button> </Link>
 
        </p>
      </Jumbotron>
    </div>



    </div>
     

    
    )
}

export default Home
