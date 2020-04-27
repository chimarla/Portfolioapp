import React, {Component} from "react"
import {Jumbotron,Container} from "react-bootstrap"
import "./projects.css"
import project from "../images/projects.png"
import {EmailIcon,TwitterIcon,LinkedinIcon,FacebookIcon} from "react-share"

export default class projects extends Component{
    render(){
        return(
            <Container>
                <Jumbotron>
                <div className="header">
                <img src={project} alt="logo"></img>
                <h2>PROJECTS</h2>
        
                </div>
                </Jumbotron>
                <Jumbotron>
                    <h3>PORTFOLIO WEBSITE</h3><br/>
                    <ul>
                    <li>The Objective of this to highlight the best work and display accomplishments, skills and potential through a website.</li>
                    <li>It is the personal resume website where it is a digital version of traditional paper resume.</li>
                    <li>This Website consists of a menu bar which directs to different webpages like projects,skills, experience and contact to showcase my work.</li>
                    </ul>
                </Jumbotron>
                <Jumbotron>
                    <h3>SYSTEM MONITORING DASHBOARD</h3>
                    <ul>
                        <li>The objective is to collect all the relevant data from the respective teams and present it on a dashboard that is monitored by the senior management and make changes if needed.</li>
                        <li>Gather data from the team servers and integrate it with the GUI and data visualization is the key.</li>
                        <li>Different teams have different webpages that has its data in a statistical manner.</li>
                    </ul>
                </Jumbotron>
                <Jumbotron>
                    <h3>ECOMMERCE SHOPPING WEBSITE</h3>
                    <ul>
                        <li>The project aims on creating an admin account which gives the admin control over the products which are to be displayed for users to order.</li>
                        <li>Developed the website layout , application layout and the functionalities layout and used large datasets for shopping cart manager in the testing stage.</li>
                    </ul>
                </Jumbotron>
                <Jumbotron>
                    <h3>ADVERTISEMENT CLICK PREDICTION</h3>
                    <ul>
                        <li>Here site category, customer Information, position of advertisement are the inputs and click prediction by the customer is output.</li>
                        <li>Used Principle component analysis for dimensionality reduction.</li>
                        <li>Applied various models on the data like Random forest, decision tree, Logistic regression and compared accuracies.</li>
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