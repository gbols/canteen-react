import moxios from 'moxios';
import menuCreators from '../actions/menuCreators';
import * as actionTypes from '../actions/actionTypes';

const dispatchFunction = jest.fn();

const url = 'https://mygbols.herokuapp.com/api/v1/menu';

describe('Fetch Article Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if fetch atricle start is fired', () => {
    expect(menuCreators.fetchMenuStart()).toEqual({
      type: actionTypes.FETCH_MENU_START,
    });
  });

  it('should return an action if fetch article failed is fired', () => {
    expect(menuCreators.fetchMenuFailed()).toEqual({
      type: actionTypes.FETCH_MENU_FAILED,
    });
  });

  it('should return an action if fetch article success is fired', () => {
    expect(menuCreators.fetchMenuSuccess()).toEqual({
      type: actionTypes.FETCH_MENU_SUCCESS,
    });
  });

  it('should call the fetch article start dispatch function', async () => {
    const mockResponse = {
      message: 'start the fetch process',
    };

    moxios.stubRequest(url, {
      status: 200,
      response: mockResponse,
    });

    await menuCreators.fetchMenu()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.FETCH_MENU_START,
    });
  });

  it('should call the article failed dispatch function', async () => {
    const mockResponse = {
      messsage: 'Something happened with the server',
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await menuCreators.fetchMenu()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
