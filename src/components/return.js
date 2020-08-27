import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label,Button } from 'reactstrap';

import './home.css'


function Ret() {
    const [data, setData] = useState([])
    const [asset, setAsset] = useState("")
    const [didSub, setDidSub] = useState(false)
    useEffect(() => {    
        axios.get(`http://localhost:3000/forgot`)
        .then(res => {
           setData(res.data)
        })
    
    
    },[didSub]);



   let inputSet = (e) => {
    setAsset(e.target.value)
   }

   let buttonSub = () => {
       let num = []
       let doesItExist = true

    data.map((e) => {
        let inputNumber = parseInt(asset)

        
       if(e.assetTag === inputNumber){
        // axios.delete(`http://localhost:3000/forgot/${e._id}`)
        // .then(res => {
        //     setAsset('')
           
        // })
        console.log('deleted')
       
       }  else {
           num.push(e.assetTag)
       }
    

    })

    let numConvert = parseInt(asset)
  let c = num.includes(typeof asset)
console.log(c)
 
   











   }
 
    return (

        <div className="bodyReturn">
       <div className="returnH1">
        <h1>Scan your asset ID and then submit to return your chrome</h1>
        </div>   
        <div className="formContainer">
         
        <div className="form-newline">
        <div className='form'>

            
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
