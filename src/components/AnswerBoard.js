import React from 'react';
import './AnswerBoard.css';
import PropTypes from "prop-types";
import AnswerBox from "./AnswerBox";

export default class AnswerBoard extends React.Component{
    static className = "answer-board";
    
    static propTypes = {
        areaData: PropTypes.array.isRequired,
        currentSelectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        answerSheet: PropTypes.array.isRequired,
        
        setState: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textInputOnFocusFunction = this.textInputOnFocusFunction.bind(this);
        this.testInputOnChangeFunction = this.testInputOnChangeFunction.bind(this);
    }
    
    textInputOnFocusFunction(index) {
        return () => {
            this.props.setState({currentSelectedIndex: index});
        }
    }
    
    testInputOnChangeFunction(index) {
        return (event) => {
            let answerSheet = this.props.answerSheet;
            answerSheet[index] = event.target.value;
            this.props.setState({answerSheet: answerSheet});
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.setState({isSubmitted: true});
    }
    
    render(){
        // generate answer boxes from data
        function getAnswerBoxes() {
            let areaData = this.props.areaData;
            let currentSelectedIndex = this.props.currentSelectedIndex;
            let answerBoxes = [];
            for(let i = 0; i < areaData.length; i++){
                let id = areaData[i].abbreviation;
                answerBoxes.push(
                    <li key={id}>
                        <AnswerBox index={i}
                                   isOnFocus={i === currentSelectedIndex}
                                   onFocusFunc={this.textInputOnFocusFunction(i)}
                                   onChangeFunc={this.testInputOnChangeFunction(i)}
                        />
                    </li>
                )
            }
            return answerBoxes;
        }
        
        return (
            <div className={AnswerBoard.className}>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {getAnswerBoxes.apply(this)}
                    </ul>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}