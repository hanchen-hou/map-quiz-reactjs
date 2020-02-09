import React from 'react';
import './ResultBoard.css';
import PropTypes from "prop-types";

export default class ResultBoard extends React.Component {
    static className = "result-board";
    
    static correctMark = "✔";
    static incorrectMark = "❌";
    
    static propTypes = {
        filledAnswer: PropTypes.array.isRequired,
        correctAnswer: PropTypes.array.isRequired,
    
        setState: PropTypes.func.isRequired
    }
    
    constructor(props) {
        super(props);
    
        this.getOnHoverFunction = this.getOnHoverFunction.bind(this);
    }
    
    getOnHoverFunction(index){
        return (event) => {
            this.props.setState({currentSelectedIndex: index});
        }
    }
    
    compare(str1, str2) {
        return str1.trim().toLowerCase() === str2.trim().toLowerCase();
    }
    
    getResults() {
        let results = [];
        for (let i = 0; i < this.props.filledAnswer.length && i < this.props.correctAnswer.length; i++) {
            let filledStr = this.props.filledAnswer[i];
            let correctStr = this.props.correctAnswer[i];
            results.push(
                <li key={i}>
                    <p onMouseEnter={this.getOnHoverFunction(i)}>{filledStr} {this.compare(filledStr, correctStr) ? ResultBoard.correctMark : ResultBoard.incorrectMark}</p>
                </li>
            )
        }
        return results;
    }
    
    render() {
        return (
            <div className={ResultBoard.className}>
                <ul>
                    {this.getResults()}
                </ul>
            </div>
        )
    }
}