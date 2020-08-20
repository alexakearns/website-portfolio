import React from 'react';
import App from './app.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<App />);
});
