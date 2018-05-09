import React from 'react';
import RedirectButton from '../RedirectButton';

import { connect } from 'react-redux';

const mapStateToProps = state =>
{
    return {dictionaries: state.dictionaries};
}

class DictionariesPage extends React.Component{
    render(){
        return (<div>
                    <h2>Dictionaries Page</h2>
                    <RedirectButton name="Back" url="/Dictionary" />
                    <br/>
                    {this.props.dictionaries.map(dict => 
                    {
                        return <Dictionary id={dict.id} name={dict.name}/>
                    })}
                </div>)
    }
}

function Dictionary(props){
    const url = "/Dictionary/" + props.id;

    return (
        <div>
            <h3>Dictionary: {props.name}</h3>
            <RedirectButton name="Go to" url={url} />
            <RedirectButton name="Delete"/>
        </div>
    )
}

export default connect(mapStateToProps)(DictionariesPage);