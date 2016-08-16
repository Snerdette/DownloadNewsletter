import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleList from './ArticleList';
import {browserHistory} from 'react-router';

class ArticlesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddArticlePage = this.redirectToAddArticlePage.bind(this);
    }

    ArticleList(article, index){
        return <div key={index}>{article.title}</div>;
    }

    redirectToAddArticlePage() {
        browserHistory.push('/article');
    }

    render() {
        const {articles} = this.props;
        return (
            <div className="col-sm-9 col-md-9 main">
                <h1 className="page-header">Articles</h1>
                <input type="submit"
                       value="Add Article"
                       className="btn-btn-primary"
                       onClick={this.redirectToAddArticlePage}/>
                <ArticleList articles={articles}/>
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    articles: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(articleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);