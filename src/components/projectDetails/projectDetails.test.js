import React from 'react';
import ProjectDetails from './projectDetails';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<ProjectDetails />);
});
