import '../styles/App.css';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home";
import UserHistory from "./UserHistory";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="Router-nav">
                    <div className="Router-left">
                        <div className="Router-item">
                            <Link 
                                className="Router-href"
                                to="/"
                            >
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className="Router-right">
                        <div className="Router-item">
                            <Link 
                                className="Router-href" 
                                to="/login"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/new">
                        <UserHistory />
                    </Route>
                    <Route path="/login">
                        <UserHistory />
                    </Route>
                    <Route path="/history">
                        <UserHistory />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
