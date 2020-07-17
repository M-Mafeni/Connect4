import React from 'react';
import {colors} from './Color'

export class Cell extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let customStyle = {
            backgroundColor: this.props.color
        };
        return (<div className = "cell" style={customStyle} > 
        </div>);
    }
}