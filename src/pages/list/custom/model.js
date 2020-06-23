import { getComplexList } from './service';

const Model = {
  namespace: 'customList',
  state: {
    complexList: []
  },
  effects: {
    *fetchComplexList(_, { call, put }) {
      const response = yield call(getComplexList, _.payload);

      yield put({
        type: 'saveComplexList',
        payload: response.data.list,
      });
    },
  },
  reducers: {
    saveComplexList(state, action) {
      return { ...state, complexList: action.payload };
    },
  },
};
export default Model;
