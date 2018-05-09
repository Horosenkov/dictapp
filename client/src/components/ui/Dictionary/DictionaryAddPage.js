import React from 'react';
import RedirectButton from '../RedirectButton';

class DictionaryAddPage extends React.Component{
    render(){
        return (
            <div>
                <h1>This is add dictionary page</h1>
                <RedirectButton name="Back" url="/Dictionary" />
            </div>
            )
    }
}

export default DictionaryAddPage;