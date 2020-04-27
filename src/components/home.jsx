import React, {Component} from "react"
import {Jumbotron , Container, Row, Col , Image,Button,OverlayTrigger,Popover} from "react-bootstrap"
import "./home.css"
import dp from "../images/dp.png"
import objective from "../images/objective.png"
import education from "../images/education.png"
import {ExternalLink} from "react-external-link"
import {EmailIcon,TwitterIcon,LinkedinIcon,FacebookIcon} from "react-share"

const popover = (
    <Popover id="popover-basic">
    <Popover.Content>
        Email:<strong>saicharanchimarla@gmail.com</strong>
        <br/>
        Phone : <strong>(630)-853-8513</strong>
      </Popover.Content>
    </Popover>
  );
   
export default class home extends Component{

  render(){


        return(
            
            <Container>
                <Row className="text-center">
                    <Col>
                        <Image src={dp} circle className="profile-pic">
                        </Image>
                    
                        <h1 style={{"color":"#2e5090"}}>Hey, This is Sai Charan Reddy Chimarla. <br/> Full Stack Web Developer</h1>
                        <ExternalLink href="https://drive.google.com/drive/folders/1g-fidXTaC_f_PZ0KZwoukcyZrrBFBCLi?usp=sharing">
                        <Button  className="btn btn-outline-Light text-left">RESUME</Button>
                        <div className="divider"/>
                        </ExternalLink>
                        <ExternalLink href="http://linkedin.com/in/sai-charan-reddy-chimarla-187228114">
                        <Button  className="btn btn-outline-Light text-left">LINKEDIN</Button>
                        </ExternalLink>
                        <div className="divider"/>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button className="btn btn-outline-Light text-left">CONTACT DETAILS</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
                   <br/>
                <Jumbotron>
                    <div className="header">
                     <img src={objective} alt="logo"/>
                    <h2>OBJECTIVE</h2>
                    </div>
                    <p style={{"font-size":"18px","color":"#666D8B"}}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Exceptionally creative and dependable Entry Level developer with a superb work ethic. Broadly and deeply knowledgeable in a wide variety of computer languages as well as the principles and techniques of web Technologies. Highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner.
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <div className="header">
                    <img src={education} alt="logo"/>
                    <h2>EDUCATION</h2>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{"font-size":"18px","color":"#666D8B"}} className="alignleft">Master's In Computer Science
                    <br/>
                    Wichita State University
                    <br/>
                    Wichita,KS</p>               
                    <p style={{"font-size":"18px","color":"#666D8B"}} className="alignright">MAY 2020<br/>CGPA:3.5</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{"font-size":"18px","color":"#666D8B"}} className="alignleft">
                    Bachelor's In Computer Science<br/>
                    GITAM University<br/>
                    Hyderabad,Telangana,INDIA<br/>
                    </p>
                    <p  style={{"font-size":"18px","color":"#666D8B"}}className="alignright">APRIL 2018<br/>CGPA:7.7/10</p>
                    <br/>
                </Jumbotron>
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
