import React, { Component } from 'react';

class addonsTemplate extends Component {
    render() {
        return (
            <div className='addons-box'>
                <img src={this.props.img} alt='product' />
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p>
                </div>
                <i class="fas fa-plus-circle"></i>
            </div>
        );
    }
}

export default addonsTemplate;