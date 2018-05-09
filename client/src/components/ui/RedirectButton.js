import React from 'react';
import { Redirect } from 'react-router-dom';

class RedirectButton extends React.Component{
    constructor(){
        super();

        this.state = {
            redirect: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({redirect: true});
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect push to={this.props.url} />
        }

        return (<button className="ui button" onClick={this.handleClick}>{this.props.name}</button>)
    }
}

export default RedirectButton;