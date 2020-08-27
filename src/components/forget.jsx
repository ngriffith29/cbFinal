import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label,Button } from 'reactstrap';

import './home.css'


function Ret() {

    const [asset, setAsset] = useState("")




   let inputSet = (e) => {
    setAsset(e.target.value)
   }

   let buttonSub = () => {
       const sendData = {
           assetTag: asset
       }

       axios.post('http://localhost:3000/forgot/', {
        assetTag: asset,
        

      })
      .then(function (response) {
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

            
        <Label for="assetTag">Asset Tag:</Label>
          <Input required value={asset} onChange={inputSet} type="text" name="email" id="assetTag" placeholder="scan your chromes asset Id" />
          <Button className="buttonReturn" onClick={buttonSub}>Submit</Button>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Ret
