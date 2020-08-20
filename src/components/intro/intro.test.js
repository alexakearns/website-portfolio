import React from 'react';
import Intro from './intro.js';
import { shallow } from 'enzyme';

it('loads without crashing', () => {
  shallow(<Intro />);
});

describe('Renders', () => {
  it('renders Alexa Kearns', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).toIncludeText('Alexa Kearns');
  });
});
