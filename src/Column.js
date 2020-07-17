import React from 'react';
import {Cell} from './Cell';
export class Column extends React.Component{
    render(){
        let cells = Array(6);
        for(let i = 0; i < 6; i++){
            cells[i]= <Cell key={i}></Cell>
        }
        return (
            <div className="column">
                {cells}
            </div>
        );
    }
}