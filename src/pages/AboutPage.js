import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Container, Row, Col } from 'react-bootstrap';
import hill from '../assets/images/hill.png';
import walk from '../assets/images/walk.png';
import cat from '../assets/images/cat.png';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <img src={hill} className="about-photo"></img><img src={walk} className="about-photo"></img><img src={cat} className="about-photo"></img><br />
                Hello! My name is David Anderson and I am a full stack developer from Glasgow, UK.<br />
                I have a BSc. Computer Science (w/ Hons) degree and have over {new Date().getFullYear() - 2014} years professional experience.<br />
                My main backgorund is in Java web development, but have worked with many other technologies. Some of those are listed below.<br />
                Please check my <a href="/projects">projects</a> page to have a look at what I'm currently working on and previous work.
                <Container className="pt-5">
                    <Row>
                        <Col>
                            <h4>Languages & Frameworks</h4>
                            <ul>
                                <li><a href="https://aws.amazon.com/">Amazon Web Services</a></li>
                                <li><a href="https://angular.io/">Angular</a></li>
                                <li><a href="https://html.spec.whatwg.org/">HTML5</a></li>
                                <li><a href="https://www.oracle.com/uk/java/technologies/javase-downloads.html">Java</a></li>
                                <li><a href="https://www.oracle.com/java/technologies/javaserverfaces.html">JSF</a></li>
                                <li><a href="https://libgdx.com/">libGDX</a></li>
                                <li><a href="https://www.outsystems.com/">OutSystems</a></li>
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
                                <li><a href="https://www.eclipse.org/ide/">Eclipse</a></li>
                                <li><a href="https://www.jetbrains.com/idea/">IntelliJ</a></li>
                                <li><a href="https://www.office.com/">MS Office Suite</a></li>
                                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                                <li><a href="https://developer.apple.com/xcode/">Xcode</a></li>                                
                            </ul>
                        </Col>
                    </Row>
                </Container>
                I have many interests outside of tech including: football, music, running and hillclimbing.<br />
                You can find me on <a href="https://uk.linkedin.com/in/david-anderson-7704ba6a" target="_blank" rel="noopener noreferrer">LinkedIn</a>, <a href="https://github.com/davidanderson281" target="_blank" rel="noopener noreferrer">Github</a> and Twitter.
            </Content>
        </div>
    );
}

export default AboutPage;