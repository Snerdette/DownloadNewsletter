import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const ArticleForm = ({article, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Article</h1>
            <TextInput
                name="title"
                label="Title"
                value={article.title}
                onChange={onChange}
                error={errors.title}/>

            <TextInput
                name="author"
                label="Author"
                value={article.author}
                onChange={onChange}
                error={errors.author}/>

            <TextInput
                name="category"
                label="Category"
                value={article.category}
                onChange={onChange}
                error={errors.category}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

ArticleForm.propTypes = {
    article: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default ArticleForm;
