export const FETCH_JOBS = 'fetch_jobs';

export const fetchJobs = () => dispatch => {
  const joblist = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Comfortable with modern JS stack, experience with React.',
      employment_type: 'full_time'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      description: 'Comfortable with modern JS stack, experience with React.',
      employment_type: 'full_time'
    },
    {
      id: 3,
      title: 'Backend Developer',
      description: 'Comfortable with modern JS stack, experience with React.',
      employment_type: 'full_time'
    },
    {
      id: 4,
      title: 'QA',
      description: 'Comfortable with modern JS stack, experience with React.',
      employment_type: 'full_time'
    }
  ];

  dispatch({
    type: FETCH_JOBS,
    payload: joblist
  });
};
