import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    Below are some of my featured projects. You can find more of my most recent personal work on my <a href="https://github.com/davidanderson281">Github</a>.<br />
                    <br />
                    <h5>Race to the Moon (Android game): <a href="https://play.google.com/store/apps/details?id=com.first.gamedemomoonshot&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">Google Play Store</a></h5>
                    <img src="https://play-lh.googleusercontent.com/Rgq6ErpvZiBT3UOF_PnQWQux5qrRu9A9_nuIb2JiI4VhqPT3bLo92wCfmonxH3mvwe--=w720-h310-rw"></img>
                </Content>
            </div>
        );
    }

}

export default ProjectsPage;