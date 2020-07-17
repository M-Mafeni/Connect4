import React from 'react';
import {Cell} from './Cell';
import {Column} from './Column';
export class Board extends React.Component{
    makeRow(){
        let row = Array(7).fill(<Cell/>);
        console.log(row)
        return <div className="row">{row}</div>;   
    }
    // render(){
    //     let grid = new Array(6);
    //     for (let i = 0; i < grid.length; i++) {  
    //         let row = new Array(7);          
    //         for(let j = 0; j < 7; j++){
    //             let elem = (
    //                 <Cell key = {j}/>
    //             );
    //             row[j] = elem;
    //         }
    //         grid[i] = <div className="row" key = {i}>{row}</div>
    //     }
    //     // console.log(row);
    //     return (
    //         <div>
    //             {grid}
    //         </div>
    //     );
    // }
    render(){
        let cols = Array(7);
        for (let index = 0; index < cols.length; index++) {
            cols[index]= <Column  key = {index}></Column>;     
        }
        return (
            <div>
                {cols}
            </div>
        );
    } 
}