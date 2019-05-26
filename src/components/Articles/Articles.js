import React from 'react';

import Article from './Article/Article'

const articles = (props) => {
  const { articles } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {articles.map((article, index) => {
            return (
              <Article article={article} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default articles;

