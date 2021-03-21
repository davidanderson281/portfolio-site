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
                                <li><a href="https://aws.amazon.com/">Amazon Web Services</a></li>
                                <li><a href="https://angular.io/">Angular</a></li>
                                <li><a href="https://html.spec.whatwg.org/">HTML5</a></li>
                                <li><a href="https://www.oracle.com/uk/java/technologies/javase-downloads.html">Java</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JSF</a></li>
                                <li><a href="https://libgdx.com/">libGDX</a></li>
                                <li><a href="https://reactjs.org/">React</a></li>
                                <li><a href="https://spring.io/">Spring</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Testing Frameworks</h4>
                            <ul>
                                <li><a href="https://cucumber.io/">Cucumber</a></li>
                                <li><a href="http://fitnesse.org/">Fitnesse</a></li>
                                <li><a href="https://junit.org/">JUnit</a></li>
                                <li><a href="https://karma-runner.github.io/">Karma</a></li>
                                <li><a href="https://protractor.angular.io/">Protractor</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Software</h4>
                            <ul>
                                <li><a href="">Eclipse</a></li>
                                <li><a href="">Intellij</a></li>
                                <li><a href="">MS Office Suite</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

            </Content>
        </div>
    );
}

export default AboutPage;