import React, { Component } from 'react';
import PlansTemplate from './plansTemplate';
import './plans.css';

export default class plans extends Component {
    render() {
        return (
            <div id='plans-box'>
                <PlansTemplate img='https://www.zillarules.com/-/media/Images/Zilla-NA/US/Pets/Pet-Type-Images/abronia-graminea-a2.jpg' title='$99 - Big Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                <PlansTemplate img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-boy-cat-names-1606242656.jpg' title='$49 - Medium Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                <PlansTemplate img='https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg' title='$19 - Starter Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
            </div>
        )
    }
}
