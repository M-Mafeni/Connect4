import React from 'react';

export function Cell(props){
    let customStyle = {
        backgroundColor: props.color
    };
    return (<div className = "cell" style={customStyle} >
    </div>);
}