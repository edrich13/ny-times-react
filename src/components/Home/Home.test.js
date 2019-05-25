import React from 'react';
import ReactDOM from 'react-dom';
import enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import Home from './Home';

it('renders without crashing home test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing home test', () => {
  enzyme.shallow(<Home />);
});

jest.mock('axios');

describe('Home component', () => {

  describe('when rendered', () => {
    it('should fetch a list of Articles in Home', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const toDoListInstance = shallow(
        <Home />
      );
      expect(getSpy).toBeCalled();
    });
  });
});