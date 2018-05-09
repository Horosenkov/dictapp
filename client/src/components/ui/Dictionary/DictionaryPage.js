import React from 'react';
import RedirectButton from '../RedirectButton';

class DictionaryPage extends React.Component{
    render(){
        return (
        <div>
            <h1>This is concrete with id = {this.props.match.params.id}</h1>
            <RedirectButton name="Back" url="/Dictionary/All" />
        </div>)
    }
}

export default DictionaryPage;