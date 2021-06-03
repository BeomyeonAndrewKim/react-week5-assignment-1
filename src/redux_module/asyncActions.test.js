import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions, loadRestaurants } from './asyncActions';
import { setCategories, setRegions, setRestaurants } from './RestaurantSlice';

jest.mock('../servies/api');

describe('asyncActions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('fetches categories when being dispatched', async () => {
    const store = mockStore({});
    await store.dispatch(loadCategories());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setCategories([
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
      { id: 4, name: '양식' },
      { id: 5, name: '분식' },
    ]));
  });

  it('fetches regions when being dispatched', async () => {
    const store = mockStore({});
    await store.dispatch(loadRegions());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setRegions([
      '서울', '대전', '대구', '부산', '광주', '강원도',
    ]));
  });

  it('fetches restuarants when being dispatched', async () => {
    const store = mockStore({});
    await store.dispatch(loadRestaurants('서울', 1));

    const actions = store.getActions();

    expect(actions[0]).toEqual(setRestaurants([
      '양천주가',
      '한국식 초밥',
      '김초밥',
    ]));
  });
});
