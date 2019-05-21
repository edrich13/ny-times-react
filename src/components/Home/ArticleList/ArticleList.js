import React, {Component} from 'react';
import { getArticles } from '../../../server-request/network';
import './ArticleList.scss';


export default class ArticleList extends Component {
	_isMounted = false;

	constructor(props) {
		super(props);
		this.state = {
			articles: []
		}
	}

	componentWillMount() {
		this._isMounted = true;

		getArticles().then((data) => {
			this.setState({ articles: data.results });
		});
	}
	

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		const { articles } = this.state;

		return (<div>

			{articles.map((article, index) => {
				return (

					<div className="article">
						<div className="row">
							<div className="col-xs-2">
								<div className="article-image">
									<i className="glyphicon glyphicon-picture"></i>
								</div>
							</div>
							<div className="col-xs-8">
								<h4 className="article-title">{article.title}</h4>
								<div className="article-byline-date">
									<span className="article-bylinne">{article.byline}</span>
									<div className="article-date">
										<i className="glyphicon glyphicon-calendar icon-pad"></i>
										<div className="inline-block">{article.published_date}</div>
									</div>
								</div>
							</div>
							<div className="col-xs-2 text-center">
								<i className="glyphicon glyphicon-chevron-right pointer" onClick={() => window.open(article.url)}></i>

							</div>
						</div>
					</div>

				);
			})}
		</div>


		);
	}
}