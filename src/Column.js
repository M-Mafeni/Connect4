import React from 'react';
import {Cell} from './Cell';
import {colors} from './Color'

export function Column(props){
    function handleClick(){
        //starting from the bottom find vacant cell and change its color
        if(!(props.winner)){
            let cells = props.vals;
            let turn = props.turn;
            for (let index = 5; index >= 0; index--) {
                if(cells[index]===colors.vacant){
                    cells[index]= turn ? colors.p1: colors.p2;
                    break;
                }
            }
            props.onClick();
            // console.log(cells)
            // this.setState({vals:cells, turn:!turn})
        }

    }

    let cells = Array(6);
    for(let i = 0; i < 6; i++){
        let color = props.vals[i]
        cells[i]= <Cell key={i} color = {color}/>
    }
        // console.log(this.props.onClick)

    return (
        <div onClick = {handleClick} className="column">
            {cells}
        </div>
    );
}