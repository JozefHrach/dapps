import React, { Component } from 'react'
import backIcon from '../../images/back-icon.svg';
import './index.css';

import {withRouter} from 'react-router-dom';


class Navbar extends Component {
    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const { title } = this.props;
        return (
            <div className={'navbar'}>
                <button 
                    onClick={this.goBack} 
                    className={'navbar-back'} 
                >
                    <img src={backIcon}  alt={'go back'} />
                </button>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default withRouter(Navbar);