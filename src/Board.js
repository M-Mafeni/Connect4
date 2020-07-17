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
        
        let turn = this.state.turn;
        this.setState({turn:!turn})
    }
    checkWin(){
        let board = this.state.board
        //check vertical win up
        for(let col = 0; col < 7; col++){
            for(let row = 5; row >= 3; row--){
                if(board[col][row] !== colors.vacant){
                    let color = board[col][row];
                    let sameColor = true;
                    for(let i = 1; i <= 3; i++){
                        sameColor = sameColor && (color === board[col][row-i])
                    }
                    if(sameColor) return true;
                }
            }
        }
        //check vertical win down
        //check horizontal win left
        //check horizontal win right
        //check diag nw
        //check diag ne
        //check diag sw
        //check diag se
        return false;
    }
    render(){
        // console.log(turn);
        let win = this.checkWin()
        let title = "Connect4"
        if(win){
            // let winner
            // console.log(turn);
            let nextturn = this.state.turn;
            let val = nextturn ? 2 : 1;
            title = `Player ${val}  wins`
        }
        let cols = Array(7);
        for (let index = 0; index < cols.length; index++) {
            let vals = this.state.board[index]
            cols[index]= <Column 
                key = {index} 
                vals={vals} 
                turn={this.state.turn} 
                onClick = {this.handleClick}
                winner = {win} >
                </Column>;     
        }
        return (
            <div>
                <h1 className="title">{title}</h1>
                <div>
                    {cols}
                </div>
            </div>         
        );
    } 
}