import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Switch from "react-switch";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'David Anderson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'David Anderson',
        subTitle: 'Full Stack Developer',
        text: 'Based in Glasgow'
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'Projects'
      },
      contact: {
        title: 'Let\'s Talk'
      },
      darkMode: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(darkMode) {
    this.setState({ darkMode });
    console.log('dark: ' + darkMode);
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg={this.state.darkMode ? 'dark' : 'light'} expand="lg" variant={this.state.darkMode ? 'dark' : 'light'}>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <div>
                Light
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.darkMode}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                /> Dark
                </div>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />} />
          {/* <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}

          <Footer />
        </Container>

      </Router>
    );
  }
}

export default App;
