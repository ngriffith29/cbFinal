import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './home.css'
import Broken from './images/broken.jpg'
import Return from './images/newReturn.jpg'

const typesOfCheckout = [{
    title: 'Did you forget your chromebook',
    link: '/forgot',
    buttonText: 'Click Here if you forgot your chromebook',
    img: 'https://blog.qlik.com/assets/uploads/images/posts/mary-pitzer/duh-xlarge-1200x630.jpg'
},
{
    title: 'Did your chromebook break? ',
    link: '/broken',
    buttonText: 'Click Here if you broke your chromebook',
    img: Broken
},
{
    title: 'Returning a loaner chromebook? ',
    link: '/return',
    buttonText: 'Click Here to return your chromebook',
    img: Return
}]

function Pick() {



    return (
        <div className="conatainer">
            <h1 className="h1">Pick from the following options</h1>
            <Container>
                <Row>
                    {
                        typesOfCheckout.map((e) => {

                            return (



                                <Col>
                                    <div className="card">
                                        <Card>

                                            <CardBody>
                                                <CardImg top width="100%" src={e.img} alt="Card image cap" />

                                                <CardTitle><h4>{e.title}</h4></CardTitle>

                                                <Link to={e.link}>                    <Button color="primary">Click Here</Button>
                                                </Link>

                                            </CardBody>
                                        </Card>
                                    </div>
                                </Col>



                            )



                        })
                    }
                </Row>

            </Container>
        </div>


    )
}

export default Pick
