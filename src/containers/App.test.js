import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import enzyme, { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  enzyme.shallow(<App />);
});

describe('App component when rendered', () => {

  it('should have header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })



  it('should have footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  })
});