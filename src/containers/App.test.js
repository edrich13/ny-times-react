import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Articles from '../components/Articles/Articles';
import enzyme, { shallow } from 'enzyme';
import axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  enzyme.shallow(<App />);
});

jest.mock('axios');

describe('App component', () => {

  describe('when rendered', () => {
    it('should fetch a list of Articles in App', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const toDoListInstance = shallow(
        <App />
      );
      expect(getSpy).toBeCalled();
    });
  });
});