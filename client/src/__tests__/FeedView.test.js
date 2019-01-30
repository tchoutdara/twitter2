import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import FeedView from '../components/FeedView';

describe('<FeedView />', () => {
    let component;
    
    beforeEach = () => {
        component = shallow(<FeedView />)
    }

    it('gets users and posts', async () => {
        component = shallow(<FeedView />)
        await component.instance().componentDidMount()
        console.log(component.state())
        expect(component.state('users').length).toEqual(3)
        expect(component.state('posts').length).toEqual(30)
    })
})