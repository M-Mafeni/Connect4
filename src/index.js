import React from 'react';
import ReactDOM from 'react-dom';
import {Board} from './Board';
import {Reset} from './Reset';
ReactDOM.render(

    (<div>
        <Board></Board>
        <Reset></Reset>
    </div>)
    ,document.getElementById('board'));