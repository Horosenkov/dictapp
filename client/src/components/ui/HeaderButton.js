import React from 'react';
import { Redirect } from 'react-router-dom';

class HeaderButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonInner: props.buttonInner,
            url: props.url,
            redirect: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState( {redirect: true} );
    }

    render() {
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect push to={this.state.url} />;
        }
      
        return <button className="item" onClick={this.handleClick}>{this.state.buttonInner}</button>;
      }
}

export default HeaderButton