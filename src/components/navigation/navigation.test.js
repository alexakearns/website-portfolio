import React from 'react';
import Navigation from './navigation';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Navigation />);
});
