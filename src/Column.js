import React from 'react';
import {Cell} from './Cell';
import {colors} from './Color'

export class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {vals:this.props.vals,turn:this.props.turn}
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(){
        //starting from the bottom find vacant cell and change its color
        let cells = this.state.vals;
        let turn = this.state.turn;
        for (let index = 5; index >= 0; index--) {
            if(cells[index]===colors.vacant){
                cells[index]= turn ? colors.p1: colors.p2;
                break;
            }
        }
        // console.log(cells)
        this.setState({vals:cells,turn:!turn})
    }
    render(){
        let cells = Array(6);
        for(let i = 0; i < 6; i++){
            let color = this.state.vals[i]
            console.log(color);
            cells[i]= <Cell key={i} color = {color}></Cell>
        }
        return (
            <div onClick = {this.handleClick} className="column">
                {cells}
            </div>
        );
    }
}