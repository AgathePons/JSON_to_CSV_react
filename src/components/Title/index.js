// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import reactLogo from '../../assets/icon/react-logo.svg';

// == Composant
function Title({ title }) {
  return (
    <div className="title">
      <img
        src={reactLogo}
        alt="react logo"
        className="title__logo"
      />
      <h1>Composant Title: {title}</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

// == Export
export default React.memo(Title);
