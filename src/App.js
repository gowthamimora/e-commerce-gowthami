import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ECommerce from "./components/ECommerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/">
                        <ECommerce/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
