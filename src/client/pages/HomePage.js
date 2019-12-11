/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import { fetchJobs } from '../actions';
import JobDetailModal from '../components/JobDetailModal';

const HomePage = props => {
  const [modal, setModal] = useState(false);
  const [currentJob, setCurrentJob] = useState({});

  const readJobDetail = job => {
    setCurrentJob(job);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderJobs = () => {
    return props.jobs.map(job => (
      <div className="col s12 m6 l6 xl4" key={job.title}>
        <div className="card large">
          <div className="card-content">
            <span className="card-title">{job.title}</span>
          </div>
          <div className="card-action">
            <a href="javascript:void(0)" onClick={() => readJobDetail(job)}>
              Read More
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const { fetchJobs: loadJobs } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadJobs();
  }, [loadJobs]);
  return (
    <div>
      {modal ? <JobDetailModal handler={closeModal} data={currentJob} /> : null}
      <div className="row">
        <div className="section">
          <h3>Job List</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderJobs()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchJobs()); // Manually dispatch a network request
};

HomePage.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.any),
  fetchJobs: PropTypes.func
};

HomePage.defaultProps = {
  jobs: [],
  fetchJobs: null
};

export default {
  component: connect(mapStateToProps, { fetchJobs })(HomePage),
  loadData
};
