import React from 'react';
import './App.css';
import AnswerBoard from "./AnswerBoard";
import Map from "./Map";
import ResultBoard from "./ResultBoard";
import PropTypes from "prop-types";

export default class App extends React.Component {
    static className = "app";
    
    static propTypes = {
        MapDataJson: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        let privinceData = this.props.MapDataJson.provinces;
        
        this.state = {
            isSubmitted: false,
            currentSelectedIndex: "",
            answerSheet: Array(privinceData.length).fill("")
        }
        
        this.updateState = this.updateState.bind(this);
    
        // generate correct answer sheet
        this.correctAnswers = [];
        privinceData.forEach((data) => {
            this.correctAnswers.push(data.name);
        });
    }
    
    updateState(obj) {
        this.setState(obj);
    }
    
    render() {
        let board;
        if (this.state.isSubmitted) {
            board = <ResultBoard setState={this.updateState}
                                 filledAnswer={this.state.answerSheet}
                                 correctAnswer={this.correctAnswers}/>
        } else {
            board = <AnswerBoard areaData={this.props.MapDataJson.provinces}
                                 setState={this.updateState}
                                 currentSelectedIndex={this.state.currentSelectedIndex}
                                 answerSheet={this.state.answerSheet}/>
        }
        
        return (
            <div className={App.className}>
                <h2>{this.props.MapDataJson.country}</h2>
                <p>Please put the full name of each province into the textbox.</p>
                <Map areaData={this.props.MapDataJson.provinces} viewBox={this.props.MapDataJson.viewBox} state={this.state}/>
                {board}
            </div>
        )
    }
}


