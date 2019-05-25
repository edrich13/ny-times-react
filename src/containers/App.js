import React, { Component } from 'react';

import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../assets/stylesheet/custom.scss';


import { getArticles } from '../services/api';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    getArticles().then((data) => {
      this.setState({ articles: data.results });
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <Header />

          <Articles articles={articles} />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
