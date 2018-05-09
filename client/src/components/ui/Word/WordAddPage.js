import React from 'react';
import { connect } from "react-redux";

import SimpleField from '../SimpleField';
import addNewWord from '../../redux/actions/addNewWord';
import RedirectButton from '../RedirectButton';

import uuid from 'uuid/v4';

const mapDispatchToProps = dispatch => {
    return {
      addNewWord: word => dispatch(addNewWord(word))
    };
  };

class WordAddPage extends React.Component{
    constructor(){
        super();

        this.state = {
            word: "",
            translate: "",
            translates: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleWordField = this.handleWordField.bind(this);
        this.handleTranslateField = this.handleTranslateField.bind(this);
        this.handleTranslateKeyPress = this.handleTranslateKeyPress.bind(this);
    }

    handleClick(e){
        e.preventDefault();

        if(this.state.translates === undefined || this.state.translates.length < 0){
            alert("Empty translates")
            return;
        }

        if(this.state.word === null || this.state.word === ""){
            alert("Empty word");
            return;
        }

        this.props.addNewWord({dictId: this.props.match.params.id, word: {id: uuid(), value: this.state.word, translates: this.state.translates}})
        this.setState({word: "", translate: "", translates: []});
    }

    handleWordField(e){
        const value = e.target.value;
        this.setState({word: value});
    }

    handleTranslateField(e){
        const value = e.target.value;
        this.setState({translate: value});
    }

    handleTranslateKeyPress(e){
        if(this.state.word === null || this.state.word === ""){
            e.preventDefault();
            alert("Empty word");
            this.setState({translate: ""});
            return;
        }
        
        if(e.key === 'Enter'){
            this.setState({translates: [...this.state.translates, this.state.translate], translate: "" })
        }
    }

    render(){
        var backUrl = "/Dictionary/" + this.props.match.params.id;

        return (
            <div className="ui grid">
                <form className="ui form">
                    <SimpleField 
                        label="Word" 
                        value={this.state.word}
                        onChange={this.handleWordField}/>
                    <SimpleField 
                        label="Translate"
                        value={this.state.translate}
                        onChange={this.handleTranslateField}
                        onKeyPress={this.handleTranslateKeyPress}/>
                    <button className="ui button" type="button" onClick={this.handleClick}>Add</button>    
                </form>
                <div>Перевод<ul>{this.state.translates.map(el => (<li>{el} </li>))}</ul></div>
                <RedirectButton name="Back" url={backUrl} />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(WordAddPage);