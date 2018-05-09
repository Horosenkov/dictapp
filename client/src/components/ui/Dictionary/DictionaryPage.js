import React from 'react';
import RedirectButton from '../RedirectButton';
import {connect} from 'react-redux';
import WordList from '../Word/WordList'

const mapStateToProps = state => {
    return {dictionaries: state.dictionaries}
}

class DictionaryPage extends React.Component{
    render(){
        var dictionary = this.props.dictionaries.find(el => {
            return el.id === this.props.match.params.id;
        })

        var addUrl = "/Dictionary/" + this.props.match.params.id + "/Word/Add";

        return (
        <div>
            <h1>{dictionary.name}</h1>
            <WordList words={dictionary.words} />
            <RedirectButton name="Add new" url={addUrl} />
            <RedirectButton name="Back" url="/Dictionary/All" />
        </div>)
    }
}

export default connect(mapStateToProps)(DictionaryPage);