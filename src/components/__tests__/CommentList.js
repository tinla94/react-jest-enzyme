import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment 1', 'comment 2']
    }

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

describe('comment li', () => {
    it('creates one LI per comment', () => {
        expect(wrapped.find('li').length).toEqual(2);
    });

    it('has each comment visible on the screen', () => {
        // cannot do 2 elements inside a contain
        expect(wrapped.render().text()).toContain('comment 1');
        expect(wrapped.render().text()).toContain('comment 2');
    });
});