import React, { Component } from 'react';
import PlansTemplate from './plansTemplate';
import AddonsTemplate from './addonsTemplate';
import TextField from '@material-ui/core/TextField';
import './plans.css';

export default class plans extends Component {
    render() {
        return (
            <div id='plans-box'>
                <h3>Plans <span>&#38;</span> Addons</h3>

                <PlansTemplate img='https://www.zillarules.com/-/media/Images/Zilla-NA/US/Pets/Pet-Type-Images/abronia-graminea-a2.jpg' title='$99 - Big Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                <PlansTemplate img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-boy-cat-names-1606242656.jpg' title='$49 - Medium Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                <PlansTemplate img='https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg' title='$19 - Starter Plan' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
                
                
                <form className={this.props.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search for Addons" variant="outlined" />
                </form>
                <h3>Popular Addons</h3>
                <AddonsTemplate img='https://www.popsci.com/resizer/2tN5JhomrdxbKVnC3I27_XOz1Zw=/760x570/filters:focal(600x450:601x451)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/UQL4MLA6MXE6ECSZHOSXA3LA4E.jpg' title='Photo Widget' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...' />
                <AddonsTemplate img='https://s23527.pcdn.co/wp-content/uploads/2019/02/moon-1-745x517.jpg.optimal.jpg' title='Moon Tool' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...' />
                <AddonsTemplate img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V9HZOuOcM1yRkRLwrZqck6PSH6jKTrL43Q&usqp=CAU' title='Photo Filter' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...' />
                <AddonsTemplate img='https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg' title='Calorie Counter' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...' />
            </div>
        )
    }
}
