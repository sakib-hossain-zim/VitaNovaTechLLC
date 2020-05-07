import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GigRequest from './scenes/GigRequest/GigRequest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GigRequest/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
