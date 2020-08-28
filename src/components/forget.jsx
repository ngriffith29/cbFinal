import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label,Button } from 'reactstrap';

import './home.css'


function Ret() {

    const [asset, setAsset] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")




   let inputSet = (e) => {
    setAsset(e.target.value)
   }

   let buttonSub = () => {
       const sendData = {
           assetTag: asset
       }

       axios.post('http://localhost:3000/forgot/', {
        firstName: fname,
        lastName: lname, 
        assetTag: asset,
        

      })
      .then(function (response) {
        setAsset("")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

   }
 
    return (

        <div className="bodyReturn">
       <div className="returnH1">
        <h1>To checkout your chromebook scan the asset ID</h1>
        </div>   
        <div className="formContainer">
         
        <div className="form-newline">
        <div className='form'>

            
        <Label for="firstname">First Name</Label>
          <Input  value={fname} onChange={((E) => {setfname(E.target.value)})} type="text" name="email" id="firstname" placeholder="scan your chromes asset Id" />

          <Label for="Lastname">Last name</Label>
          <Input  value={lname} onChange={((e) => {setlname(e.target.value)})} type="text" name="email" id="firstname" placeholder="scan your chromes asset Id" />




          <Label for="assetTag">Asset Tag:</Label>
          <Input  value={asset} onChange={inputSet} type="text" name="email" id="assetTag" placeholder="scan your chromes asset Id" />
          <Button className="buttonReturn" onClick={buttonSub}>Submit</Button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Ret
