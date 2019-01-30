import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedComponent, { FeedPost } from '../components/FeedPost';
import toJson from 'enzyme-to-json';
import { reduxHelper } from './reduxHelper';
const initialState = { posts: [] }

describe('<FeedPost />', () => {

    describe('render', () => {
      let component;
      beforeEach( () => {
        const tree = reduxHelper(ConnectedComponent, initialState).component
        component = mount(tree);
      });
  
      it ('matches snapshot', () => {
        expect(toJson(component)).toMatchSnapshot();
      });
  
    });

    it('updates state on change', () => {
        let component = shallow(<FeedPost posts={[]}/>)
        let input = component.find('input');
        input.simulate('focus');
        input.simulate('change', { target: { name: 'name', value: 'Hello' } })
        expect(component.state('name')).toEqual('Hello');
      });
     
      it('submits the form', () => {
        let test = { dispatch: jest.fn() }
        let component = mount(<FeedPost dispatch={test.dispatch} posts={[]}/>)
        component.setState({ name: 'Hello' });
        component.find('form').simulate('submit');
        expect(test.dispatch).toHaveBeenCalledTimes(1);
        expect(component.state('name')).toEqual('');
      });
});