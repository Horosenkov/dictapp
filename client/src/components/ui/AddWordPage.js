import React from 'react';
import { connect } from "react-redux";

import SimpleField from './SimpleField';
import addNewWord from '../redux/actions/addNewWord';


const mapDispatchToProps = dispatch => {
    return {
      addNewWord: word => dispatch(addNewWord(word))
    };
  };

class AddWordPage extends React.Component{
    constructor(){
        super();

        this.state = {
            word: "",
            translate: "",
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleWordField = this.handleWordField.bind(this);
        this.handleTranslateField = this.handleTranslateField.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.addNewWord({word: this.state.word, translate: this.state.translate})
        this.setState({word: "", translate: ""});
    }

    handleWordField(e){
        const value = e.target.value;
        this.setState({word: value});
    }

    handleTranslateField(e){
        const value = e.target.value;
        this.setState({translate: value});
    }

    render(){
        return (
            <div className="ui grid container">
                <form className="ui form">
                    <SimpleField 
                        label="Word" 
                        value={this.state.word}
                        onChange={this.handleWordField}/>
                    <SimpleField 
                        label="Translate"
                        value={this.state.translate}
                        onChange={this.handleTranslateField}/>
                    <button class="ui button" type="submit" onClick={this.handleClick}>Add</button>    
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddWordPage);