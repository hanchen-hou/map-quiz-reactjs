import React from 'react';
import PropTypes from 'prop-types';
import './Area.css';

export default class Area extends React.Component {
    static propTypes = {
        graphData: PropTypes.array,
        color: PropTypes.string,
    };
    
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.graphData === null || this.props.graphData.length === 0) return null;
    
        const style = {
            fill: this.props.color,
        }
        
        if(this.props.graphData.length === 0){
            return null;
        } else if (this.props.graphData.length === 1) {
            return <path d={this.props.graphData[0]} style={style}/>;
        } else {
            function getPaths(){
                let paths = [];
                let dataSet = this.props.graphData;
                for(let i = 0; i < dataSet.length; i++){
                    paths.push(<path key={i} d={dataSet[i]}/>);
                }
                return paths
            }
            
            return (
                <g style={style}>
                    {getPaths.apply(this)}
                </g>
            )
        }
        
    }
}