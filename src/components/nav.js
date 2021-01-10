import React, { Component } from 'react'
import './nav.css';

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'hamburgerOpen': true,
        }
    }
    hamburgerClick = e => {
        let navBox = document.getElementById('nav-box');
        if(this.state.hamburgerOpen === false) {
            navBox.classList.remove('nav-box-hide');
            navBox.classList.add('nav-box-show');
        }
        else if(this.state.hamburgerOpen === true) {
            navBox.classList.remove('nav-box-show');
            navBox.classList.add('nav-box-hide');
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
                    <button onClick={ this.hamburgerClick }>
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <a href=''>User Profile</a>
                <a href=''>Notifications</a>
                <a href=''>Billing <span>&#38;</span> Invoices</a>
                <a href=''>Plans <span>&#38;</span> Addons</a>
            </div>
        )
    }
}
