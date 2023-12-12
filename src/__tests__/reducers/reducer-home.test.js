import reducerHome from '../../reducers/reducer-home';

describe('reducerHome', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(reducerHome({}, { type: null })).toEqual({});
  });
});