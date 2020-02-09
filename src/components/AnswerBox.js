import React from 'react';
import './AnswerBox.css';
import PropTypes from "prop-types";

export default class AnswerBox extends React.Component{
    static selectedBgColor = "#ffffdd";
    static className = "answer-box";
    
    static propTypes = {
        index: PropTypes.number,
        isOnFocus: PropTypes.bool,
        onFocusFunc: PropTypes.func,
        onChangeFunc: PropTypes.func
    }
    
    render(){
        return (
            <input className={AnswerBox.className} type="text" placeholder={this.props.index+1}
                   style={ this.props.isOnFocus ? { background: AnswerBox.selectedBgColor} : {}}
                   onFocus={this.props.onFocusFunc}
                   onChange={this.props.onChangeFunc}
            />
        )
    }
}