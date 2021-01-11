import React, { Component } from 'react';

class billingTemplate extends Component {
    render() {
        return (
            <div className='invoice-box'>
                <div className='invoice-prices'>
                    <div>
                        <h3>{this.props.item}</h3>
                    </div>
                    <p>{this.props.cost}</p>
                    <p>{this.props.tax}</p>
                    <p>{this.props.total}</p>
                </div>
                <p>{this.props.desc}</p>
                <div className='invoice-details'>
                    <p>Order Number: {this.props.number}</p>
                    <p>{this.props.date}</p>
                </div>
            </div>
        );
    }
}

export default billingTemplate;