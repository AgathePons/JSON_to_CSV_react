// == Import
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Paragraph({ text }) {
  return (
    <div className="paragraph">
      <p className="paragraph__text">
        {text}
      </p>
    </div>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

// == Export
export default React.memo(Paragraph);
