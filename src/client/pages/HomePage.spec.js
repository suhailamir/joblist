import React from 'react';
import { shallow, configure } from 'enzyme';
// setup file
import Adapter from 'enzyme-adapter-react-16';
import component from './HomePage';

configure({ adapter: new Adapter() });

describe('AldarContactCard', () => {
  let props;
  let getShallowComponent;

  beforeEach(() => {
    props = {};

    getShallowComponent = () => shallow(<component {...props} />, { context: {} });
  });

  describe('render', () => {
    it('should render with all props', () => {
      expect(getShallowComponent()).toMatchSnapshot();
    });
  });
});
