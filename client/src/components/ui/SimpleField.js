import React from 'react';

class SimpleField extends React.Component{
    render(){
        return (
            <div class="field">
                <label>{this.props.label}</label>
                <input type="text" placeholder={this.props.label} onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default SimpleField;