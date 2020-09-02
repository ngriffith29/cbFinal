import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label,Button } from 'reactstrap';

import './home.css'


function Ret(props) {
    const [data, setData] = useState([])
    const [asset, setAsset] = useState("")
    const [didSub, setDidSub] = useState(false)
    useEffect(() => {    
        axios.get(`https://chromeapi.herokuapp.com/forgot`)
        .then(res => {
           setData(res.data)
        })
    
    
    },[]);



   let inputSet = (e) => {
    setAsset(e.target.value)
   }

   let buttonSub = () => {
    let listOfAssets = []
    data.map((e) => {
        listOfAssets.push(e.assetTag)
    })

 
   if(listOfAssets.includes(parseInt(asset))){
    axios.delete(`https://chromeapi.herokuapp.com/forgot/${asset}`)
    .then(res => {
        setAsset('')
    })
   }else{
       alert('re-scan your asset ID')
       setAsset('')
   }

   props.history.push('/');
    
 }

console.log(data)

 
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
