import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import BillingTemplate from './billingTemplate';
import './billing.css';

class billing extends Component {
    render() {
        return (
            <div id='billing-box'>
                <h3>Billing <span>&#38;</span> Invoices</h3>
                <p>Account Status: <b>Premium Member</b></p>
                <form className={this.props.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Order Number" variant="outlined" />
                </form>
                <div id='invoice-labels'>
                    <p className='text-left'>Description</p>
                    <p className='text-right'>Cost</p>
                    <p className='text-right'>Tax</p>
                    <p className='text-right'>Total</p>
                </div>
                <BillingTemplate item='Big Plan' desc='Lorem ipsum dolor sit amet, consectetur' cost='$99' tax='$8.79' total='$107.79' number='00175235' date='Dec. 12, 2020' />
                <BillingTemplate item='Medium Plan' desc='Lorem ipsum dolor sit amet, consectetur' cost='$49' tax='$4.35' total='$53.35' number='00171421' date='Nov. 12, 2020' />
                <BillingTemplate item='Medium Plan' desc='Lorem ipsum dolor sit amet, consectetur' cost='$49' tax='$4.35' total='$53.35' number='00165482' date='Oct. 12, 2020' />
                <BillingTemplate item='Starter Plan' desc='Lorem ipsum dolor sit amet, consectetur' cost='$19' tax='$1.69' total='$20.69' number='00161288' date='Sep. 12, 2020' />
                <BillingTemplate item='Starter Plan' desc='Lorem ipsum dolor sit amet, consectetur' cost='$19' tax='$1.69' total='$20.69' number='00158390' date='Aug. 26, 2020' />
            </div>
        );
    }
}

export default billing;