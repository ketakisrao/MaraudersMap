import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Character from './Characters/Character';
import { Route, Link, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const routing = (
    <div>
        <div>
            <Router>
                <div className="nav">
                    <h1 className="brand">The Marauders Map</h1>
                    <ul>
                        <li><Link to="/">Places</Link></li>
                        <li><Link to="/wizardsnwitches">Characters</Link></li>
                        <li><Link to="/wizardsnwitches">Bertie Botts Beans</Link></li>
                    </ul>
                </div>

                <Switch>
                    <Route exact path="/"><App /></Route>
                    <Route exact path="/wizardsnwitches"><Character /></Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
