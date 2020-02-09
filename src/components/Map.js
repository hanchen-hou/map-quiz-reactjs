import React from 'react';
import './Map.css';
import Area from "./Area";
import PropTypes from "prop-types";

export default class Map extends React.Component {
    static className = "map-data";
    
    static defaultColor = "#ffffff";
    static selectedColor = "#d4ecea";
    static answeredColor = "#e0e3ec";
    // static answeredColor = "#edd5e3";
    
    static propTypes = {
        areaData: PropTypes.array,
        viewBox: PropTypes.string,
        state: PropTypes.object,
    };
    
    constructor(props) {
        super(props);
        
        this.getAreas = this.getAreas.bind(this);
    }
    
    getAreas(){
        let areaComponents = [];
        let areaData = this.props.areaData;
        for(let i = 0; i < areaData.length; i++){
            const abbreviation = areaData[i].abbreviation;
    
            let color = Map.defaultColor;
            if(this.props.state.currentSelectedIndex === i){
                color = Map.selectedColor;
            } else if(this.props.state.answerSheet[i]){
                color = Map.answeredColor;
            }
    
            areaComponents.push(<Area key={abbreviation} graphData={areaData[i].svg} color={color}/>)
        }
        return areaComponents;
    }
    
    render() {
        return (
            <div className={Map.className}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox={this.props.viewBox}>
                    <g>
                        {this.getAreas()}
                    </g>
                </svg>
            </div>
        )
    }
}