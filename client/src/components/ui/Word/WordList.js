import React from 'react';

class WordList extends React.Component{
    render(){
        return (
            <div className="ui list">
                {this.props.words.map(el =>
                (<div className="item">
                    <div className="content">
                    <label>{el.value}: </label>
                    <ul>
                    {el.translates.map(translate => (<li>{translate}</li>))}
                    </ul>
                    </div>
                </div>))}
            </div>
        )
    }
}

export default WordList;