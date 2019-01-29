import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import FeedView from '../components/FeedView';

describe('<FeedView />', () => {
     it('renders an editor area', () => {
         const editor = shallow(<FeedView />)
         expect(editor.find('textarea').length).toEqual(1); 
     })
})