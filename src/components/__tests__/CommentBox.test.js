import React from 'react';
import { mount,  } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

// before each test
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

// after each test 
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
    // simualte change event
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment'}
    });

    // update re-render
    wrapped.update();

    // expect the value to be equal the input value
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});