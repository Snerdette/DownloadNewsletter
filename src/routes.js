import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ArticlesPage from './components/article/ArticlesPage';
import ManageArticlesPage from './components/article/ManageArticlesPage'; //eslint-disable-line import/no-named-as-default



export default (
<Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="article" component={ManageArticlesPage} />
    <Route path="article/:id" component={ManageArticlesPage} />
    <Route path="articles" component={ArticlesPage} />
    </Route>
);