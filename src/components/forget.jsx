import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label,Button } from 'reactstrap';

import './home.css'


function Ret(props) {

    const [asset, setAsset] = useState("")
    const [email, setemail] = useState("")


    const [grade, setGrade] = useState(["Pick A Grade",6, 7, 8])
    const [pickedGrade, setPickedGrade] = useState(grade[0])

    console.log(grade)
    console.log(email)
    console.log(asset)

   let inputSet = (e) => {
    setAsset(e.target.value)
   }

   let buttonSub = () => {

       axios.post('https://chromeapi.herokuapp.com/forgot/', {
       email: email,
        grade: pickedGrade,
        assetTag: asset,
        

      })
      .then(function (response) {
        setAsset("")
        setPickedGrade(grade[0])
        setemail("")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      props.history.push('/');

   }


   let handleChange = (event) => {
    setPickedGrade(event.target.value)

}
 
    return (

        <div className="bodyReturn">
       <div className="returnH1">
        <h1>To checkout your temporary chromebook scan the asset ID</h1>
        </div>   
        <div className="formContainer ">
         
        <div className="form-newline">
        <div className='form form-height'>

            
        <Label for="firstname">Enter Your Email Address</Label>
          <Input  value={email} onChange={((E) => {setemail(E.target.value)})} type="text" name="email" id="firstname" placeholder="enter your email" />


      
                <Label for="grade">Pick Your Grade</Label>

                <Input type="select" id="grade" value={pickedGrade} onChange={handleChange} >
                    {
                        grade.map((grade) => {
                            return <option value={grade}>{grade}</option>
                        })
                    }
                </Input>

             



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
