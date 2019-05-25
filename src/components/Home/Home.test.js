import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import article from '../../__mocks__/article';

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

  describe('<Article />', () => {
    it('contains h4', () => {
      const wrapper = mount(<Article article={article} />)
      const value = wrapper.find('h4').text()
      expect(value).toEqual('Decade in the Red: Trump Tax Figures Show Over $1 Billion in Business Losses')
    })
    it('accepts article props', () => {
      const wrapper = mount(<Article article={article} />);
      expect(wrapper.props().article).toEqual(article)
    })
  })
});