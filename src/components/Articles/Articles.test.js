import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Articles from './Articles';
import axios from 'axios';

configure({ adapter: new Adapter });

jest.mock('axios');


describe('<Articles />', () => {
    it('should fetch a list of Articles in App', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const toDoListInstance = shallow(
            <Articles />
        );
        expect(getSpy).toBeCalled();
    });
});

