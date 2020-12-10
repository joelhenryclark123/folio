import React from 'react'
// import Link from 'gatsby-link'

import './Hero.css'

// Icons
import MailIcon from '../../images/MailIconShadow.png'
import LinkedinIcon from '../../images/LinkedinIconShadow.png'
import GitHubIcon from '../../images/GithubIconShadow.png'

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstClick: false,
      expanded: false
    }

    this.ToggleRundown = this.ToggleRundown.bind(this);
  }

  ToggleRundown(e) {
    e.preventDefault();
    
    this.setState({
      firstClick: true,
      expanded: !this.state.expanded
    });
  }

  renderDescription() {
    const aboutMeText = (
      "I’m a college student who builds stuff. I design and code consumer-facing apps."
    );

    if (this.state.firstClick === false) {
      return(<p></p>)
    } else {
      return(<p id={ this.state.expanded ? "about-me-showing" : "about-me-hidden" }>{aboutMeText}</p>)
    }
  }

  render() {
    return(
      <div className="Hero">
        <div className="HeroGroup">
          <h1 className={"HeroText"}>Joel Clark</h1>

          <div className={"ContactLinks"}>
            <a href="mailto:joelhenryclark@gmail.com">
              <img
                className={"ContactButton"}
                src={MailIcon}
                alt={"Email Me"}
              />
            </a>
            <a href="https://www.linkedin.com/in/joel-clark-590295165/" target="_blank">
              <img
                className={"ContactButton"}
                src={LinkedinIcon}
                alt={"Connect on LinkedIn"}
              />
            </a>
            <a href="https://github.com/joelhenryclark123" target="_blank">
              <img
                className={"ContactButton"}
                src={GitHubIcon}
                alt={"My GitHub Profile"}
              />
            </a>
          </div>

          {this.renderDescription()}

          <div id="button-row">
          <button onClick={(e) => this.ToggleRundown(e)}>
            <p className="HeroText">
              { this.state.expanded ? "hide" : "about me" }
            </p>
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
