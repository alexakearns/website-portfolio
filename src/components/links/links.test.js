import React from 'react';
import Links from './links.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Links />);
});
