import React, {Component} from 'react';
import Maps from './Map/Maps';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App" >
                <h1>The Marauders Map</h1>
                <div className="back">
                    <Maps></Maps>
                </div>
            </div>
        );
    }
}

export default App;
