import React from 'react';
import { mount} from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { Landing } from '../../../components/Landing';

let store = createMockStore();
const props ={
    SignupAction: jest.fn()
}
describe('Login tests', () => {
    const wrapper = mount(<Provider store={store}><Landing {...props}/></Provider>);
    const preventDefault = jest.fn();

    it('should render without crashing', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it('should submit a form and call prevent default for signup', () => {
        expect(wrapper.find('.signup-btn').simulate('submit', { preventDefault }));
        expect(preventDefault).toBeCalled();
      });

    it('should change form fields when state changes in signup', () => {
        wrapper.setState({ username: 'mail' });
        expect(wrapper.find('[name="username"]').props().value).toEqual('mail');
      });
});