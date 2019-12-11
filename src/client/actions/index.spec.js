import { fetchJobs } from './index';

describe('actions', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('getJobs action', () => {
    it('should return data in case of success', () => {
      fetchJobs()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
