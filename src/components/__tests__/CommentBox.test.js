import React from 'react';
import Root from 'Root';
import { mount, } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

// before each test
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

// after each test 
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        // simulate change event
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        // update re-render
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        // expect the value to be equal the input value
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
        // submit form
        wrapped.find('form').simulate('submit');
        wrapped.update();

        // test value
        expect(wrapped.find('textarea').prop('value')).toEqual(' ');
    });
});


