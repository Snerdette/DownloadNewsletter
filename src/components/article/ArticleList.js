import React, {PropTypes} from 'react';
import ArticleListRow from './ArticleListRow';

const ArticleList = ({articles}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>$nbsp;</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
            </thead>
            <tbody>
            {articles.map(article =>
                <ArticleListRow key={article.id} article={article} />
            )}
            </tbody>
        </table>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;
