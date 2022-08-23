// == Import
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from 'semantic-ui-react';
import './styles.scss';

// == Component
function TextArea({
  textareaInputLabel,
  textareaInputValue,
  onTextareaInputChange,
  textareaInputPlaceholder,
  onTextareaInputSubmit,
  buttonType,
  buttonTextContent,
  className,
  ...rest
}) {
  return (
    <Form
      onSubmit={onTextareaInputSubmit}
      className={classNames(className)}
      {...rest}
    >
      <Form.TextArea
        style={{ minHeight: 250 }}
        label={textareaInputLabel}
        value={textareaInputValue}
        onChange={onTextareaInputChange}
        placeholder={textareaInputPlaceholder}
      />
      <Form.Button
        primary
        type={buttonType}
      >
        {buttonTextContent}
      </Form.Button>
    </Form>
  );
}

TextArea.propTypes = {
  textareaInputLabel: PropTypes.string.isRequired,
  textareaInputValue: PropTypes.string.isRequired,
  onTextareaInputChange: PropTypes.func.isRequired,
  textareaInputPlaceholder: PropTypes.string.isRequired,
  onTextareaInputSubmit: PropTypes.func.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonTextContent: PropTypes.string.isRequired,
  className: PropTypes.string,
};
TextArea.defaultProps = {
  className: 'jsonform',
};
export default React.memo(TextArea);
