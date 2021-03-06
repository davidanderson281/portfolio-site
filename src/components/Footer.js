import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm>
                        David Anderson
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by David Anderson
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;