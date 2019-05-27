
import React from 'react';

import './Article.scss';

const article = (props) => {
    const { id, title, byline, published_date, media, url } = props.article;

    return (
        <div className="article" key={id}>
            <div className="row">
                <div className="col-xs-2">
                    <div className="article-image">
                        <img className="img-responsive" src={media[0]['media-metadata'][1].url} alt={media[0].caption} />
                    </div>
                </div>
                <div className="col-xs-8" onClick={props.goToDetails(url)} >
                    <h4 className="article-title">{title}</h4>
                    <div className="article-byline-date">
                        <span className="article-bylinne">{byline}</span>
                        <div className="article-date">
                            <i className="glyphicon glyphicon-calendar icon-pad"></i>
                            <div className="inline-block">{published_date}</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2 text-center" onClick={() => window.open(url)}>
                    <i className="glyphicon glyphicon-chevron-right pointer"></i>
                </div>
            </div>
        </div>
    );
}

export default article;