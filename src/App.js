import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';


const App = () => {
    return (
        <Cardlist robots={ robots }/>
    );
}

export default App;