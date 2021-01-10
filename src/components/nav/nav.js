import React, { Component } from 'react'
import './nav.css';

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'hamburgerOpen': true,
            'hamburgerIcon': 'fas fa-times',
        }
    }
    hamburgerClick = e => {
        let navBox = document.getElementById('nav-box');
        if(this.state.hamburgerOpen === false) {
            navBox.classList.remove('nav-box-hide');
            navBox.classList.add('nav-box-show');
            this.setState({'hamburgerIcon': 'fas fa-times'});
        }
        else if(this.state.hamburgerOpen === true) {
            navBox.classList.remove('nav-box-show');
            navBox.classList.add('nav-box-hide');
            this.setState({'hamburgerIcon': 'fas fa-bars'});
        }
        this.setState({
            'hamburgerOpen': !this.state.hamburgerOpen
        });
    }
    render() {
        return (
            <div id='nav-box'>
                <div id='nav-hamburger'>
                    <p>My Account</p>
                    <button onClick={this.hamburgerClick}>
                        <i className={this.state.hamburgerIcon}></i>
                    </button>
                </div>
                <a href='/'>User Profile</a>
                <a href='/notifications'>Notifications</a>
                <a href='/billing'>Billing <span>&#38;</span> Invoices</a>
                <a href='/plans'>Plans <span>&#38;</span> Addons</a>
            </div>
        )
    }
}
