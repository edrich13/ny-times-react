import React, { Component } from 'react';

import Article from './Article/Article'
import { getArticles } from '../../services/api';

export class Articles extends Component {

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

  goToDetails = (url) => () => {
    this.props.history.push(`/details?url=${url}`);
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {articles.map((article, index) => {
              return (
                <Article article={article} key={index} goToDetails={this.goToDetails} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default Articles;

