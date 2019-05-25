import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
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

describe('App component when rendered', () => {

  it('should have header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('should have Articles', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Articles)).toHaveLength(1);
  })

  it('should fetch a list of Articles in App', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const toDoListInstance = shallow(
      <App />
    );
    expect(getSpy).toBeCalled();
  });


  it('should have footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  })
});