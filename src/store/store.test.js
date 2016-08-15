import expect from 'expect';
import {createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as articleActions from '../actions/articleActions';

describe('Store', () => {
    it('Should handle creating courses', function() {
        // arrange
        const store = createStore(rootReducer, initialState);
        const article = {
            title: "Clean Code"
        };

        // act
        const action = articleActions. createArticleSuccess(article);
        store.dispatch(action);

        // assert
        const actual = store.getState().articles[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
    });
});