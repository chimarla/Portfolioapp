import React, {Component} from "react"
import{Container,Row,Col,Jumbotron,Card} from "react-bootstrap"
import "./skills.css"
import skill from "../images/skills.png"
import react from "../images/react.png"
import angular from "../images/angular.png"
import node from "../images/node.png"
import git from "../images/git.png"
import html from "../images/html.png"
import js from "../images/javascript.png"
import css from "../images/css.png"
import mongodb from "../images/mongodb.png"
import firebase from "../images/firebase.png"
import python from "../images/python.png"
import java from "../images/java.png"
import bash from "../images/bash.png"
import sql from "../images/sql.png"
import rest from "../images/rest.png"
import jquery from "../images/jquery.png"
import {EmailIcon,TwitterIcon,LinkedinIcon,FacebookIcon} from "react-share"

export default class skills extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                <div className="header">
                <img src={skill} alt="logo"></img>
                <h2>SKILLS</h2>
                </div>
                </Jumbotron>
                <Row>
                    <Col xs={3}>
                <Card >
                <Card.Img variant="top" height="220px"src={react} />
                <Card.Body>
                <Card.Title>REACT JS</Card.Title>
                </Card.Body>
                </Card>
                </Col>

                    <Col xs={3}>
                <Card >
                <Card.Img variant="top" height="220px" src={angular} />
                <Card.Body>
                <Card.Title>ANGULAR JS</Card.Title>
                </Card.Body>
                </Card>
                </Col>
                
                <Col xs={3}>
                <Card >
                <Card.Img variant="top" height="220px" src={node} />
                <Card.Body>
                <Card.Title>NODE JS</Card.Title>
               
                </Card.Body>
                </Card>
                </Col>

                <Col xs={3}>
                <Card bg="Light">
                <Card.Img variant="top" height="220px" src={js} />
                <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                
                </Card.Body>
                </Card>
                </Col>
                
                </Row>
                <br/>

                <Row>
                    <Col xs={3}>
                    <Card >
                <Card.Img variant="top" height="220px" src={jquery} />
                <Card.Body>
                <Card.Title>JQUERY</Card.Title>
                
                </Card.Body>
                </Card>

                    </Col>
                    <Col xs={3}>
                    <Card >
                <Card.Img variant="top" height="220px" src={html} />
                <Card.Body>
                <Card.Title>HTML</Card.Title>
               
                </Card.Body>
                </Card>
                    </Col>

                    <Col xs={3}>
                    <Card  >
                <Card.Img variant="top" height="220px" src={css} />
                <Card.Body>
                <Card.Title>CSS</Card.Title>
            
                </Card.Body>
                </Card>
                    </Col>
    
                    <Col xs={3}>
                    <Card >
                <Card.Img variant="top" height="220px" src={mongodb} />
                <Card.Body>
                <Card.Title>MONGO DB</Card.Title>
         
                </Card.Body>
                </Card>
                    </Col>
             </Row>
             <br/>
             <Row>
                 <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={firebase} />
                <Card.Body>
                <Card.Title>FIREBASE DB</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>
                 <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={python} />
                <Card.Body>
                <Card.Title>PYTHON</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>
                 <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={java} />
                <Card.Body>
                <Card.Title>JAVA</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>
                 <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={bash} />
                <Card.Body>
                <Card.Title>BASH</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>
             </Row>
             <br/>
             <Row>
             <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={sql} />
                <Card.Body>
                <Card.Title>MY SQL</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>

                 <Col xs={3}>
                 <Card >
                <Card.Img variant="top" height="220px" src={rest} />
                <Card.Body>
                <Card.Title>REST API</Card.Title>
         
                </Card.Body>
                </Card>

                 </Col>

                 <Col xs={3}>
                    <Card >
                <Card.Img variant="top" height="220px" src={git} />
                <Card.Body>
                <Card.Title>GIT</Card.Title>
                
                </Card.Body>
                </Card>

                    </Col>
             </Row>
             <br/>
             <div style={{
                             background: "white", 
                             alignItems: "center",
                             marginLeft:"500px",
                             marginRight:"300px"
                            }}>
                <EmailIcon size={32} round={true}/>
                <TwitterIcon size={32} round={true} />
                <LinkedinIcon href size={32} round={true} />
                <FacebookIcon size={32} round={true} />
                </div>
                <br/>

            </Container>
        )
    }
}