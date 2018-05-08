import React from 'react';
import HeaderButton from './HeaderButton';

class Header extends React.Component{
    render(){
        return (
            <div className="ui stackable menu">
                <HeaderButton buttonInner="Home" url="/"/>
                <HeaderButton buttonInner="Add word" url="/AddWord"/>
                <HeaderButton buttonInner="Word list" url="/WordList"/>
            </div>
        )
    }
}

export default Header;