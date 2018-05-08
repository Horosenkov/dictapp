import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>
{
    return {words: state.words};
}

class WordListPage extends React.Component{
    
    render(){
        return (
            <div className="ui list">
                {this.props.words.map(el =>
                (<div className="item">
                    <div className="content">
                    <label>{el.word}: </label>
                    <ul>
                    {el.translates.map(translate => (<li>{translate}</li>))}
                    </ul>
                    </div>
                </div>))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(WordListPage);