import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, browserHistory } from 'react-router-dom';
import Login from './src/components/Login'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Dashboard from './src/components/Dashboard'
import FrameOperation from './src/components/FrameOperation'

class App extends Component {
    constructor(){
        super();
        this.state = {
            frames: []
        }
        this.getDashboardDetails = this.getDashboardDetails.bind(this);
    }
    getDashboardDetails(res){
      
                this.setState({
                    frames: res
                });
    }
    render() {
        return(
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Switch>
                            <Route exact path = '/' component = {Login} />
                            <Route exact path = '/dashboard' render={(props) => (localStorage.getItem('loggedin') ? <div><Header action={this.getDashboardDetails}/><Dashboard frames={this.state.frames} /><Footer /></div> : (<Redirect to="/" />))} />
                            <Route exact path = '/addframe' render={(props) => (localStorage.getItem('loggedin') ? <div><Header action={this.getDashboardDetails}/><FrameOperation /><Footer /></div> : (<Redirect to="/" />))} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;