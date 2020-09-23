import React from 'react'

import './Beaver.css'

class Beaver extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstClick: false,
            expanded: false
        }

        // This binding is necessary to make `this` work in the callback
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
        if (this.state.firstClick === false) {
            return(<p></p>)
        } else {
            return(
                <p id={ this.state.expanded ? "beaver-explanation-showing" : "beaver-explanation-hidden" }>
                I built this app to solve my personal productivity problems, and it’s evolved to become a viable replacement to general-purpose to do list apps.<br/><br/>It’s designed in Figma, built with SwiftUI and the code's hosted on GitHub. Check it out!
                </p>
            )
        }
    }

    render() {
        return (
            <div className={"Beaver"}>
                <div className={"BeaverGroup"}>
                    <div className="BeaverPhones">
                    <img id="phone-image" src={require('../../images/BeaverPhones.png')} alt={"Beaver"}/>
                    </div>
                    <div className={"BeaverInfo"}>
                    <div className={"BeaverDescription"}>
                        <div className={"BeaverTitle"}>
                        <img
                            className={"AppIcon"}
                            src={require('../../images/BeaverIcon.png')}
                            alt={"Beaver Logo"}
                        />
                        <h1>BEAVER</h1>
                        </div>
                        <p id="beaver-subhead">Choose your plans, ignore the rest, then relax</p>
                        {this.renderDescription()}
                        <a href="#" onClick={(e) => this.ToggleRundown(e)}>
                        <p id="more-button" className="clickableText">{
                            this.state.expanded ? "less" : "more"
                        }</p>
                        </a>
                    </div>
                    <div className={"BeaverLinkBox"}>
                        <a className={"BeaverLink"} href={"https://apps.apple.com/us/app/the-beaver-app/id1501987163?ls=1"} target="_blank" rel="noreferrer">
                        <img
                            className={"AppStoreBadge"}
                            src={require('../../images/AppStoreLogo.png')}
                            alt={"AppStore Logo"}
                        />
                        </a>
                        <a className={"BeaverLink"} href="https://github.com/joelhenryclark123/beaver" target="_blank" rel="noreferrer">
                        <img
                        className={"GithubBadge"}
                        src={require('../../images/GithubLogo.png')}
                        alt={"Github Logo"}
                        />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beaver