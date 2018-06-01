import React from 'react';
import HeaderButton from './HeaderButton';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hidden: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({hidden: !this.state.hidden})
    }
    
    render(){
        if(this.state.hidden){
            return (
                <div className="ui stackable menu">
                    <button className="ui icon button item" onClick={this.handleClick}>
                        <i class="align justify icon"></i>
                    </button> 
                </div>
            )    
        }
        return (
            <div className="ui stackable menu">
                <button className="ui icon button item" onClick={this.handleClick}>
                    <i class="align justify icon"></i>
                </button> 
                <HeaderButton buttonInner="Home" url="/"/>
                <HeaderButton buttonInner="Dictionaries" url="/Dictionary"/>
                <HeaderButton buttonInner="Exam" url="/Exam"/>
            </div>
        )
    }
}

export default Header;