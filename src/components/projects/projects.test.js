import React from 'react';
import Projects from './projects';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Projects />);
});
