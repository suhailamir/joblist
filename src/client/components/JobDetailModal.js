import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JobDetailModal = props => {
  const { handler, data } = props;
  const Header = styled.div`
    z-index: 1003;
    display: block;
    opacity: 1;
    top: 10vw;
    width: 95vw;
    height: 75vh;
    max-height: 75vh;
  `;
  const Overlay = styled.div`
    z-index: 1002;
    display: block;
    opacity: 0.5;
  `;
  return (
    <>
      <Header id="modal1" className="modal">
        <div className="modal-footer">
          <button
            type="button"
            onClick={handler}
            className="modal-close waves-effect waves-green btn red"
          >
            Close
          </button>
        </div>
        <div className="modal-content">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <div className="divider" />
        </div>
      </Header>
      <Overlay role="presentation" onClick={handler} className="modal-overlay" />
    </>
  );
};

JobDetailModal.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handler: PropTypes.func
};

JobDetailModal.defaultProps = {
  data: null,
  handler: null
};

export default JobDetailModal;
