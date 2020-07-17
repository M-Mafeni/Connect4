import React from 'react';
import {Cell} from './Cell';
import {Column} from './Column';
import {colors} from './Color'

let turn = true;
export class Board extends React.Component{
    constructor(props){
        super(props);
        let board = Array(7);
        for (let index = 0; index < 7; index++) {
            board[index] = Array(6).fill(colors.vacant); 
        }
        this.state = {board:board,turn:turn}
    }
    changeTurn(){
        this.setState({turn: !turn});
        turn = !turn;
    }
    render(){
        let cols = Array(7);
        for (let index = 0; index < cols.length; index++) {
            let vals = this.state.board[index]
            cols[index]= <Column  key = {index} vals={vals} turn={turn}></Column>;     
        }
        return (
            <div>
                {cols}
            </div>
        );
    } 
}