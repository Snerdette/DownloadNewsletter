import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class ManageArticlesPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.redirectToSubmitArticlePage = this.redirectToSubmitArticlePage.bind(this);
    }
}