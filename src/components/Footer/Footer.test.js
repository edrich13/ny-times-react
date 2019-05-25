import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import enzyme, { shallow } from 'enzyme';


describe('Footer component', () => {

  it('renders without crashing Footer test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing Footer test', () => {
    enzyme.shallow(<Footer />);
  });

  it('should have footer class', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.footer')).toHaveLength(1);
  })

});