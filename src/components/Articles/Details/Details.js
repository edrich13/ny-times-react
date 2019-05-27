import React from 'react';
import get from 'lodash/get';
import queryString from 'query-string'
import './Details.scss'

const Details = props => {
    let queryParams = {};

    try {
        queryParams = queryString.parse(get(props, 'location.search'));
    } catch (err) {
        console.warn('Error occured', err);
    }

    const url = get(queryParams, 'url');

    if (!url) return <div>Page Not Found</div>;

    return (
        <iframe data-testid='article-detail' src={url} className="iframe-box"></iframe>
    )
}

export default Details;