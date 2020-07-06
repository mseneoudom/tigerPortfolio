import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home'
import ArchiveType from './components/sub-components/ArchiveType';
import Videos from './components/sub-components/Videos'
import Archives from './components/Archives';
import About from './components/About';
import ShootPage from './components/sub-components/shoot-components/ShootPage.js'
import Page404 from './components/Page404'
import ScrollToTop from './components/ScrollToTop'


class App extends Component {
  render(){
    return (
      <Router>
        <ScrollToTop />
        <Route exact path="/" component={Home}/>

        <Route exact path="/about" component={About}/>

        <Route exact path="/archives" component={Archives}/>
        <Switch>
          <Route exact path="/archives/videos/" component={Videos}/>
          <Route exact path="/archives/:type/" component={ArchiveType}/>
          <Route exact path="/archives/:type/:shoot" component={ShootPage}/>
        </Switch>

        <Route exact path="/archives/videos/:video" component={Videos}/>

        
      </Router>
    );
  }
}

export default App;
