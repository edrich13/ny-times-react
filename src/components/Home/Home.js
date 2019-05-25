import React, { Component } from 'react';
import './Home.scss';

import Article from './Article/Article'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { getArticles } from '../../services/api';


export default class Home extends Component {

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
      <div className="row">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                {articles.map((article, index) => {
                  return (
                    <Article article={article} key={index} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Home };
