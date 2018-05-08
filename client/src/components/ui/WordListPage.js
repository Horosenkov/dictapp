import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>
{
    return {words: state.words};
}

class WordListPage extends React.Component{
    
    render(){
        return (
            <div className="ui middle aligned divided list">
                {this.props.words.map(el =>
                (<div className="item">
                    <div className="content">
                    <label>{el.word} {el.translate}</label>
                    </div>
                </div>))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(WordListPage);