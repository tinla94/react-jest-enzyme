import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Root from 'Root';

ReactDOM.render(
    <React.Fragment>
        <Root>
            <App />
        </Root>
    </React.Fragment>
    , document.querySelector('#root'));