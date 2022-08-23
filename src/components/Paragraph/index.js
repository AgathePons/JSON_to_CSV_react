// == Import
import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import './styles.scss';

// == Composant
function Paragraph({ text }) {
  return (
    <Segment className="paragraph">
      <p className="paragraph__text">
        {text}
      </p>
    </Segment>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

// == Export
export default React.memo(Paragraph);
