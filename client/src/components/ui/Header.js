import React from 'react';
import HeaderButton from './HeaderButton';

class Header extends React.Component{
    render(){
        return (
            <div className="ui stackable menu">
                <HeaderButton buttonInner="Home" url="/"/>
                <HeaderButton buttonInner="Dictionaries" url="/Dictionary"/>
                <HeaderButton buttonInner="Exam" url="/Exam"/>
            </div>
        )
    }
}

export default Header;