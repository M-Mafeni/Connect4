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
        //check vertical win
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

        //check horizontal win
        for(let col = 0; col<=3; col++){
            for(let row = 5; row >= 0; row--){
                if(board[col][row] !== colors.vacant){
                    let color = board[col][row];
                    let sameColor = true;
                    for(let i = 1; i <= 3; i++){
                        sameColor = sameColor && (color === board[col+i][row])
                    }
                    if(sameColor) return true;
                }

            }
        }
        //check diag
        for(let col = 0; col<= 3; col++){
            for(let row = 5; row >= 3; row--){
                if(board[col][row] !== colors.vacant){
                    let color = board[col][row];
                    let sameColor = true;
                    for(let i = 1; i <= 3; i++){
                        sameColor = sameColor && (color === board[col+i][row-i])
                    }
                    if(sameColor) return true;
                }

            }
        }
        return false;
    }
    render(){
        // console.log(turn);
        let win = this.checkWin()
        let title = "Connect4"
        let nextturn = this.state.turn;
        let myStyle,playerColor,player;
        if(win){
            // let winner
            // console.log(turn);
            playerColor = nextturn ? "Yellow" : "Red";
            myStyle = {color: nextturn?"yellow":"red",display:"inline-block"}
            player = <div style = {myStyle}>{playerColor}</div>; 
            title = (<h1 className="title">{player} wins</h1>);
        }else{
            playerColor = nextturn ? "Red" : "Yellow"
            myStyle = {color: nextturn?"red":"yellow",display:"inline-block"}
            player = <div style = {myStyle}>{playerColor}'s</div>;
            title = (<h1 className="title">{player} turn</h1>);
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
                {title}
                <div>
                    {cols}
                </div>
            </div>         
        );
    } 
}