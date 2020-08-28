import React from 'react';
import About from './about.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<About />);
});

describe('Renders text', () => {
  it('renders info about me', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toIncludeText('Makers Academy');
  });
});
