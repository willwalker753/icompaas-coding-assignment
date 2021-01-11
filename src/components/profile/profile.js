import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './profile.css';

export default class profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
             'checked': true
        }
    }
    
    toggleChecked = () => {
        this.setState({'checked': !this.state.checked})
    };
    render() {
        return (
            <div id='profile-box'>
                <h3>User Profile</h3>
                <div id='profile-picture' className={this.props.root}>
                <img src='https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2011/04/profilefavourite-900x600.jpg' alt='profile'></img>
                    <input
                        accept="image/*"
                        className={this.props.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </label>
                </div>
                <form id='profile-password' className={this.props.root} noValidate autoComplete="off">
                    <p>Change Password</p>
                    <TextField id="standard-basic" type='password' label="Current Password" />
                    <TextField id="standard-basic" type='password' label="New Password" />
                    <TextField id="standard-basic" type='password' label="Repeat New Password" />
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={this.state.checked} onChange={this.toggleChecked} />}
                        label="Subscribed to Email Newsletter"
                    />
                </FormGroup>
                <img id='desktop-picture' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autumn-in-the-white-mountains-of-new-hampshire-royalty-free-image-841380450-1567025100.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*' alt='landscape'/>
            </div>
        )
    }
}
