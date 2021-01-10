import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './profile.css';

export default class profile extends Component {
    render() {
        return (
            <div id='profile-box'>
                <h3>User Profile</h3>
                <div id='profile-picture' className={this.props.root}>
                <img src='https://github.com/willwalker753/organizing-your-react-code/blob/master/defaultProfilePic.png?raw=true' alt='profile'></img>
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
            </div>
        )
    }
}
