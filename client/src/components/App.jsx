import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Menu from './pages/Menu';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

function App(){
    return ( 
        <Router>
            <Switch>
                <Route path="/" component={Menu} exact/>
                <Route path="/search" component={Search} exact/>
                <Route path="/dashboard" component={Dashboard} exact/>
            </Switch>
        </Router>
    );
}
export default App;