import React, {PropTypes} from 'react';

const ArticleView = ({article}) => {
    return (
        <ArticleDocument>
            <h1>Manage Article</h1>
            <ArticleDocument article = {article}></ArticleDocument>
            <div src={article.readSrc}>
        </div>
    );
};

ArticleView.propTypes = {
    article: React.PropTypes.object.isRequired
};

export default ArticleView;
