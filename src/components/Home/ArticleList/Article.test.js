import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from './ArticleList';
import axios from 'axios';
 
jest.mock('axios');
 
describe('ArticleList component', () => {
  describe('when rendered', () => {
    it('should fetch a list of ArticleList', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const toDoListInstance = shallow(
        <ArticleList/>
      );
      expect(getSpy).toBeCalled();
    });
  });
});