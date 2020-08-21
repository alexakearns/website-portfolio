import React from 'react';
import Home from './home.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Home />);
});

describe('Renders', () => {
  it('renders Alexa Kearns', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toIncludeText('Alexa Kearns');
  });
});
