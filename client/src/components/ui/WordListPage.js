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
                    {el.translates.map(translate => (<label>{translate};</label>))}
                    </div>
                </div>))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(WordListPage);