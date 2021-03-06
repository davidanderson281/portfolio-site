import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-end" md={12}>
                        This site was made by David Anderson using <a href="https://reactjs.org/" className="pl-1" target="_blank" rel="noopener noreferrer">React</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;