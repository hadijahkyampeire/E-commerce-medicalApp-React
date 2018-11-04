import { logIn, AUTHENTICATED } from '../../../redux/ActionCreators/auth/AuthActionCreators';

 describe('Login', () => {
  const response = {
    data: {},
  };
  const responseData = {
    type: AUTHENTICATED,
    payload: response.data,
  };
   it('should return action type and payload', () => {
    expect(logIn(response)).toEqual(responseData);
  });
});