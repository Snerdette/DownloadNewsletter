import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ArticleListRow = ({article}) => {
    return (
        <tr>
            <td><a href={article.readHref} target="_blank">Read</a></td>
            <td><Link to={'/article/' + article.id}>{article.title}</Link></td>
            <td>{article.author}</td>
        </tr>
    );
};

ArticleListRow.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListRow;