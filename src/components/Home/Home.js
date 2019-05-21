import React from 'react';
import './Home.css';
import ArticleList from './ArticleList/ArticleList';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';


function Home() {
  return (
    <div className="row">
      <Header />
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <ArticleList />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
