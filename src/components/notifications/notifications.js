import React, { Component } from 'react';
import NotificationsTemplate from './notificationsTemplate';
import './notifications.css';

class notifications extends Component {
    render() {
        return (
            <div id='notifications-box'>
                <NotificationsTemplate name='New Plan Available!' date='Yesterday' desc='Now offering the Big Plan starting at $99'/>
                <NotificationsTemplate name='Starter Free Trial' date='Dec. 28, 2020' desc='Try out our starter plan for 1 week free!'/>
                <NotificationsTemplate name='New Plan Available!' date='Yesterday' desc='Now offering the Big Plan starting at $99'/>
                <NotificationsTemplate name='Starter Free Trial' date='Dec. 28, 2020' desc='Try out our starter plan for 1 week free!'/>
            </div>
        );
    }
}

export default notifications;