import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const buttonStyle = {
  marginRight: '15px',
  border: 0,
  lineHeight: 2.5,
  padding: '20px',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#031fab',
  textShadow: '1px 5px 5px #000',
  borderRadius: '35px',
  backgroundColor: 'rgba(fff00)',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          style={buttonStyle}
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default FeedbackOptions;
