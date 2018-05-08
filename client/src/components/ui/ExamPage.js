import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {words: state.words};
}

class ExamPage extends React.Component{
    
    

    render(){
        return <div><ul>{this.props.words.map(_ => (<li>{_.word}</li>))}</ul></div>
    }
}

export default connect(mapStateToProps)(ExamPage);