import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Title.css';

const Title = ({ headline }) => (<h2>{headline}</h2>);

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
