import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MapDataJson from "./data/canada_province_data";

ReactDOM.render(<App MapDataJson={MapDataJson}/>, document.getElementById('root'));
