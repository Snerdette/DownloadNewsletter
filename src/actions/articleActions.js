import * as types from './actionTypes';
import articleApi from '../api/mockArticleApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadArticlesSuccess(articles) {
    return { type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function createArticleSuccess(article) {
    return { type: types.CREATE_ARTICLE_SUCCESS, article};
}

export function updateArticleSuccess(article) {
    return { type: types.UPDATE_ARTICLE_SUCCESS, article};
}

export function loadArticles() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return articleApi.getAllArticles().then(articles => {
            dispatch(loadArticlesSuccess(articles));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveArticle(article) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());
        return articleApi.saveArticle(article).then(savedArticle => {
            article.id ? dispatch(updateArticleSuccess(savedArticle)) :
                dispatch(createArticleSuccess(savedArticle));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}
