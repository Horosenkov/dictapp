import React from 'react';
import RedirectButton from '../RedirectButton';

class MenuPage extends React.Component{    
    render(){
        return (
            <div>
                <h1>This is Dictionary List</h1>
                <RedirectButton name="Create new dictionary" url="/Dictionary/Add" />
                <RedirectButton name="To all dictionaries" url="/Dictionary/All" />
            </div>
        )
    }
}

export default MenuPage;