import React from 'react';
import { mount} from 'enzyme';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import Login from '../../../components/auth/Login';

let store = createMockStore();
const props ={
    LoginAction: jest.fn()
}
describe('Login tests', () => {
    const loginWrapper = mount(<Provider store={store}><Login {...props}/></Provider>);
    const preventDefault = jest.fn();
    it('should render without crashing', ()=>{
        expect(loginWrapper).toMatchSnapshot();
    });

    it('should submit a form and call prevent default', () => {
        expect(loginWrapper.find('form').simulate('submit', { preventDefault }));
        expect(preventDefault).toBeCalled();
      });
  
      it('should respond to input changes in login', () => {
        loginWrapper.find('[name="email"]').simulate('change', { target: { name: 'email', value: 'js' } });
        expect(loginWrapper.find('[name="email"]').prop('value')).toBe('js');
      });
});
