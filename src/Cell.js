import React from 'react';

export function Cell(props){
    const customStyle = {backgroundColor: props.color};
    return (<div className = "cell" style={customStyle} />);
}