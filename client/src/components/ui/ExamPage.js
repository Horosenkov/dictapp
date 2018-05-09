import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
    return {dictionaries: state.dictionaries};
}

class ExamPage extends React.Component{
    
    

    render(){
        return <div><ul>{this.props.dictionaries.map(dict => dict.words.map(_ => (<li>{_.value}</li>)))}</ul></div>
    }
}

export default connect(mapStateToProps)(ExamPage);