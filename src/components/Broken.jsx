import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect, Link } from "react-router-dom";
import axios from 'axios'


function Broken(props) {
    // let ClickH = () =>{ 
    //     console.log('hi')
    //     props.history.goBack()
    // }

    const [grade, setGrade] = useState(["Pick A Grade", 6, 7, 8])
    const [pickedGrade, setPickedGrade] = useState(grade[0])
    const [issues, setIssues] = useState(["Pick an Issue", "Broken Screen", "Broken Keys", 'fried motherboard'])
    const [pickedIssue, setPickedIssue] = useState(issues[0])
    const [input, setInputer] = useState("")
    const [email, setEmail] = useState("")

    let handleInputChange = (event) => {
        setInputer(event.target.value)

    }

    let handleEmail = (event) => {
        setEmail(event.target.value)
    }

    let handleChange = (event) => {
        setPickedGrade(event.target.value)

    }
    let handleIssues = (event) => {
        setPickedIssue(event.target.value)
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        // axios.post('http://localhost:3000/students/', {
        //     assetTag: input,
        //     brokeReason: pickedIssue,
        //     grade: pickedGrade

        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        axios.all([
            axios.post('http://localhost:3000/lifetime/', {
                assetTag: input,
                brokeReason: pickedIssue,
                grade: pickedGrade,
                email: email
            }),
            axios.post('http://localhost:3000/students/', {
                assetTag: input,
                brokeReason: pickedIssue,
                grade: pickedGrade,
                email: email
            })
        ])
            .then(axios.spread((data1, data2) => {
                // output of req.
                console.log('data1', data1, 'data2', data2)
            }));


        setPickedGrade(grade[0])
        setInputer("")
        setPickedIssue(issues[0])
        props.history.push('/forgot');

    }


    return (
        <div className="form-container">
            <Form onSubmit={e => { e.preventDefault() }}>

            <FormGroup>
                    <Label htmlFor="email">Enter your email address</Label>
                    <Input id="email" onChange={handleEmail} value={email} />

                </FormGroup>


                <FormGroup>
                    <Label htmlFor="asset">Scan Your Asset Id</Label>
                    <Input id="asset" onChange={handleInputChange} value={input} />

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

                <Button onClick={handleSubmit} color="primary">Submit and get new Chrome</Button>


            </Form>
        </div>
    )
}

export default Broken
