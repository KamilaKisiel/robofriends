import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox'
import {robots} from './robots';


class App extends Component {
    render() {
    return (
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox></SearchBox>
        <Cardlist robots={ robots }/>
        </div>
    );
 }
}

export default App;