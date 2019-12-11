import { FETCH_JOBS } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;

    default:
      return state;
  }
};
