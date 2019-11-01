import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Place from './Places/Place'
import Beans from './Beans/Beans'
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
                        <li><Link to={process.env.PUBLIC_URL + '/'}>Places</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/wizardsnwitches'}>Characters</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + '/flavorbeans'}>Bertie Botts Beans</Link></li>
                    </ul>
                </div>

                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'}><App /></Route>
                    <Route exact path={process.env.PUBLIC_URL + '/wizardsnwitches'}><Character /></Route>
                    <Route exact path={process.env.PUBLIC_URL + '/flavorbeans'}><Beans /></Route>
                    <Route path={process.env.PUBLIC_URL + "/:id"} children={<Place />} />
                    <Redirect to={process.env.PUBLIS_URL + '/'} />
                </Switch>
            </Router>
        </div>
    </div>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
