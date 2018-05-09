import React from 'react';
import {connect} from 'react-redux';

import RedirectButton from '../RedirectButton';
import SimpleField from '../SimpleField';
import addNewDictionary from '../../redux/actions/addNewDictionary';

const mapDispatchToProps = dispatch => {
    return {
      addNewDictionary: dictionary => dispatch(addNewDictionary(dictionary))
    };
};

class DictionaryAddPage extends React.Component{
    constructor(){
        super();

        this.state = {
            name: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(){
        if(this.state.name === undefined || this.state.name === ""){
            return;
        }
        this.props.addNewDictionary({name: this.state.name});
        this.setState({name: ""});
    }

    handleChange(e){
        const value = e.target.value;
        this.setState({name: value});
    }

    render(){
        return (
            <div>
                <h1>This is add dictionary page</h1>
                <div>
                <form className="ui form">
                    <SimpleField 
                        label="Name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <button className="ui button" type="button" onClick={this.handleClick}>Add</button>    
                </form>
                <RedirectButton name="Back" url="/Dictionary" />
                </div>
            </div>
            )
    }
}

export default connect(null, mapDispatchToProps)(DictionaryAddPage);