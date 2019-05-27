import React, { Component } from 'react';

import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Details from '../components/Articles/Details/Details';
import '../assets/stylesheet/custom.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export class App extends Component {


  render() {

    return (
      <div className="container-fluid">
        <div className="row">

          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Articles} />
              <Route path="/details" component={Details} />
            </Switch>
          </Router>


          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
