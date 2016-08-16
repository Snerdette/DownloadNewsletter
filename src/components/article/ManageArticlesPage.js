import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleForm from './ArticleForm';
import toastr from 'toastr';

export class ManageArticlePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            article: Object.assign({}, props.article),
            errors: {},
            saving: false
        };

        this.updateArticleState = this.updateArticleState.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.article.id != nextProps.article.id) {
            this.setState({article: Object.assign({}, nextProps.article)});
        }
    }

    updateArticleState(event) {
        const field = event.target.name;
        let article = this.state.article;
        article[field] = event.target.value;
        return this.setState({article: article});
    }

    saveArticle(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveArticle(this.state.article)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Article Saved!');
        this.context.router.push('/articles');
    }

    render() {
        return (
            <ArticleForm
                onChange={this.updateArticleState}
                onSave={this.saveArticle}
                article={this.state.article}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageArticlePage.propTypes = {
    article: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageArticlePage.contextTypes = {
    router: PropTypes.object
};

function getArticleById(articles, id) {
    const article = articles.filter(article => article.id == id);
    if(article.length) return article[0];
    return null;
}

function mapStateToProps(state, ownProps){
    const articleId = ownProps.params.id;
    let article = {id: '', readHref: '', title: '', author: '', category: ''};

    if(articleId && state.articles.length > 0) {
        article = getArticleById(state.articles, articleId);
    }

    return {
        article: article
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(articleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticlePage);
