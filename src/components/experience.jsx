import React, {Component} from "react"
import {Jumbotron,Container} from "react-bootstrap"
import "./experience.css"
import work from "../images/experience.png"
import {EmailIcon,TwitterIcon,LinkedinIcon,FacebookIcon} from "react-share"


export default class exp extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                <div className="header">
                <img src={work} alt="logo"></img>
                <h2>WORK EXPERIENCE</h2>
                </div>
                </Jumbotron>
                <Jumbotron>
                    <h3>DELTA AIR LINES</h3>
                    <h5 className="alignleft">SUMMER INTERN </h5>
                    <h5 className="alignright">MAY 2019 - AUGUST 2019</h5>
                    <br/>
                    <br/>
                    <ul>
                        <li>Developed a System Monitoring Dashboard using python libraries Dash and Plotly alongside with HTML and CSS.</li>
                        <li>Monitoring dashboard displays current and past statistics of the respective teams which can be viewed by the management.</li>
                        <li>Worked with senior developers to write code from scratch and gained real-time experience in python and shell scripting.</li>
                        <li>Experience with high volume datasets and responsible for pulling data from the servers and integrating it with GUI.</li>
                        <li>Participated on weekly team meetings to present design ideas and discuss strategies on how to produce efficient work.</li>
                        <li>Learned how to handle complex situations and overcome difficulties.</li>
                    </ul>
                    <br/>
                    <br/>
                    <h5>TECHNOLGIES USED</h5>
                    <br/>
                    <ul>
                        <li>Python </li>
                        <li>Dash and Plotly</li>
                        <li>Html,Css and JavaScript</li>
                        <li>Hadoop Database Systems</li>
                    </ul>
                
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