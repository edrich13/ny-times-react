
import React from 'react';

const article = (props) => {
    return (
        <div className="article pointer" onClick={() => window.open(props.article.url)}>
            <div className="row">
                <div className="col-xs-2">
                    <div className="article-image">
                        <img className="img-responsive" src={props.article.media[0]['media-metadata'][1].url} alt={props.article.media[0].caption} />
                    </div>
                </div>
                <div className="col-xs-8">
                    <h4 className="article-title">{props.article.title}</h4>
                    <div className="article-byline-date">
                        <span className="article-bylinne">{props.article.byline}</span>
                        <div className="article-date">
                            <i className="glyphicon glyphicon-calendar icon-pad"></i>
                            <div className="inline-block">{props.article.published_date}</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2 text-center">
                    <i className="glyphicon glyphicon-chevron-right pointer"></i>
                </div>
            </div>
        </div>
    );
}

export default article;