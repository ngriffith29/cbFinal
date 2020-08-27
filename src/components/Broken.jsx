import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'


function Broken(props) {
    // let ClickH = () =>{ 
    //     console.log('hi')
    //     props.history.goBack()
    // }

    const [grade, setGrade] = useState(["Pick A Grade",6, 7, 8])
    const [pickedGrade, setPickedGrade] = useState(grade[0])
    const [issues, setIssues] = useState(["Pick an Issue","Broken Screen", "Broken Keys", 'fried motherboard'])
    const [pickedIssue, setPickedIssue] = useState(issues[0])
    const[input, setInputer] = useState("")

let handleInputChange = (event) => {
    setInputer(event.target.value)
    
}

    let handleChange = (event) => {
        setPickedGrade(event.target.value)

    }
let handleIssues = (event) => {
    setPickedIssue(event.target.value)
}
    let handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/students/', {
            assetTag: input,
            brokeReason: pickedIssue,
            grade: pickedGrade

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          setPickedGrade(grade[0])
          setInputer("")
          setPickedIssue(issues[0])
          props.history.goBack()
    }


    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label htmlFor="asset">Scan Your Asset Id</Label>
            <Input id="asset" onChange={handleInputChange} value={input}   />

            </FormGroup>




                <FormGroup>
                <Label for="grade">Pick Your Grade</Label>

                <Input type="select" id="grade" value={pickedGrade} onChange={handleChange} >
                    {
                        grade.map((grade) => {
                            return <option value={grade}>{grade}</option>
                        })
                    }
                </Input>

                </FormGroup>







                    <FormGroup>
                <Label htmlFor="issues">Pick your Problem</Label>

                <Input type="select" id="issues" value={pickedIssue} onChange={handleIssues} >
                    {
                     issues.map((grade) => {
                            return <option value={grade}>{grade}</option>
                        })
                    }
                </Input>
                </FormGroup>

                <Button type="submit" color="primary">Submit and get new Chrome</Button>

            </Form>
        </div>
    )
}

export default Broken
