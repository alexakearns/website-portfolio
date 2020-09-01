import React from 'react';
import Contact from './contact';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Contact />);
});
