import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const ArticleDocument = ({article, errors}) => {
    return (
        <form>
            <h1>Manage Article</h1>


    );
};

ArticleDocument.propTypes = {
    article: React.PropTypes.object.isRequired,
    errors: React.PropTypes.object
};

export default ArticleDocument;
