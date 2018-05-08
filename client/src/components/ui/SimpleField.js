import React from 'react';

class SimpleField extends React.Component{
    render(){
        return (
            <div class="field">
                <label>{this.props.label}</label>
                <input type="text" 
                    placeholder={this.props.label} 
                    value={this.props.value}
                    onChange={this.props.onChange} 
                    onKeyPress={this.props.onKeyPress}
                     />
            </div>
        )
    }
}

export default SimpleField;