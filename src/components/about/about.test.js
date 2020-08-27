import React from 'react';
import About from './about.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<About />);
});
