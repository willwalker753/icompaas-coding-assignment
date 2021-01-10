import React, { Component } from 'react';

class plansTemplate extends Component {
    render() {
        return (
            <div className='plans-box'>
                <img src={this.props.img} alt='product' />
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p>
                    <a href='/plans'>LEARN MORE</a>
                </div>
            </div>
        );
    }
}

export default plansTemplate;