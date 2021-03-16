import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                Hello! I am David Anderson, a full stack developer from Glasgow, UK. I have over {new Date().getFullYear() - 2014} years experience. Blah Blah..

                Experience with:
                <img src="https://angular.io/assets/images/logos/angular/angular.png" alt="angular"></img>
            </Content>
        </div>
    );
}

export default AboutPage;