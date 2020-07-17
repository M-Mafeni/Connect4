import React from 'react';
// import {Cell} from './Cell';
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
        // this.changeTurn = this.changeTurn.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        //starting from the bottom find vacant cell and change its color
        // let cells = this.state.vals;
        // console.log(this.state)
        let turn = this.state.turn;
        // console.log(this.props )
        // for (let index = 5; index >= 0; index--) {
        //     if(cells[index]===colors.vacant){
        //         cells[index]= turn ? colors.p1: colors.p2;
        //         break;
        //     }
        // }
        // console.log(cells)
        // console.log(turn);

        this.setState({turn:!turn})
    }
    checkWin(){

        for(let col = 0; col < 7; col++){
            for(let row = 0; row < 6; row++){

            }
        }
        return true;
    }
    changeTurn(){

        let turn = this.state.turn
        this.setState({turn:!turn})
    }
    render(){
        let cols = Array(7);
        for (let index = 0; index < cols.length; index++) {
            let vals = this.state.board[index]
            cols[index]= <Column key = {index} vals={vals} turn={this.state.turn} onClick = {this.handleClick} ></Column>;     
        }
        return (
            <div>
                <h1 className="title">Connect4</h1>
                <div>
                    {cols}
                </div>
            </div>         
        );
    } 
}