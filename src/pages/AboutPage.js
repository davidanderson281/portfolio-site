import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                Hello! My name is David Anderson and I am a full stack developer from Glasgow, UK.<br />
                I have a BSc. Computer Science (w/ Hons) degree and have over {new Date().getFullYear() - 2014} experience.<br />
                I have developed personal and professional projects using various technologies, some of which are mentioned below.
                <Container className="pt-3">
                    <Row>
                        <Col>
                            <h4>Programming Languages & Frameworks</h4>
                            <ul>
                                <li><a href="">Amazon Web Services</a></li>
                                <li><a href="">Angular</a></li>
                                <li><a href=""></a></li>
                                libgdx
                                <li><a href="">Fitnesse</a></li>
                                <li><a href="">HTML5</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JSF</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JUnit</a></li>
                                <li><a href="">React</a></li>
                                <li><a href="">Spring</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Testing Frameworks</h4>
                            <ul>
                                <li><a href="">Amazon Web Services</a></li>
                                <li><a href="">Angular</a></li>
                                <li><a href="">Cucumber</a></li>
                                <li><a href="">Fitnesse</a></li>
                                <li><a href="">HTML5</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JSF</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JUnit</a></li>
                                <li><a href="">React</a></li>
                                <li><a href="">Spring</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Software</h4>
                            <ul>
                                <li><a href="">Amazon Web Services</a></li>
                                <li><a href="">Angular</a></li>
                                <li><a href="">Cucumber</a></li>
                                <li><a href="">Fitnesse</a></li>
                                <li><a href="">HTML5</a></li>
                                <li><a href="">Java</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JSF</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JUnit</a></li>
                                <li><a href="">React</a></li>
                                <li><a href="">Spring</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </Content>
        </div>
    );
}

export default AboutPage;