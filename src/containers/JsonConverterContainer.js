// == Import
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { saveAs } from 'file-saver';
import { Segment, Card, Icon } from 'semantic-ui-react';
import { IsCorrectJson, jsonToCsv } from '../utils/utils';
import TextArea from '../components/TextArea';

// == Component
function JsonConverterContainer({ className }) {
  const [textareaValueJson, setTextareaValue] = useState('');
  const [textAreaValueCsv, setTextAreaValueCsv] = useState('');
  const [jsonFile, setJsonFile] = useState('');
  const [csvFile, setCsvFile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextareaInputJsonChange = (e) => {
    setTextareaValue(e.target.value);
  };
  const handleTextareaInputCsvChange = (e) => {
    setTextAreaValueCsv(e.target.value);
  };

  const handleTextareaInputJsonSubmit = () => {
    if (textareaValueJson.trim() === '') {
      setErrorMessage('Enter Json code to convert in csv');
    }
    else if (IsCorrectJson(textareaValueJson)) {
      setErrorMessage('');
      setJsonFile(JSON.parse(textareaValueJson));
      setJsonFile(JSON.parse(textareaValueJson));
      setTextAreaValueCsv(csvFile);
    }
    else {
      setErrorMessage('The json submitted is not correct');
    }
  };

  const handleTextareaInputCsvSubmit = () => {
    if (textAreaValueCsv.trim() === '') {
      setErrorMessage('Convert Json to csv before download');
    }
    else {
      console.log('bipbip, downloadinding...bipbip');
      const blob = new Blob([csvFile], { type: 'text/csv' });
      saveAs(blob, 'convertedJson.csv');
    }
  };

  useEffect(() => {
    if (jsonFile) {
      setCsvFile(jsonToCsv(jsonFile));
    }
  }, [jsonFile]);

  useEffect(() => {
    setTextAreaValueCsv(csvFile);
  }, [csvFile]);

  return (
    <Segment
      className={classNames(className)}
    >
      { errorMessage && (
        <Card fluid color="red">
          <Card.Content>
            <Icon
              name="warning"
              color="red"
            />
            {errorMessage}
          </Card.Content>
        </Card>
      )}
      <TextArea
        textareaInputLabel="JSON"
        textareaInputPlaceholder={'[\n\t{\n\t\t"name":"Kevin",\n\t\t"age":"15"\n\t},\n\t{\n\t\t"name":"Timéo",\n\t\t"age":"8"\n\t}\n]'}
        textareaInputValue={textareaValueJson}
        onTextareaInputChange={handleTextareaInputJsonChange}
        buttonType="submit"
        buttonTextContent="Convert into CSV"
        onTextareaInputSubmit={handleTextareaInputJsonSubmit}
      />
      <TextArea
        textareaInputLabel="CSV"
        textareaInputPlaceholder={'"name","age"\n"Kevin","15"\n"Timéo","8"'}
        textareaInputValue={textAreaValueCsv}
        onTextareaInputChange={handleTextareaInputCsvChange}
        buttonType="submit"
        buttonTextContent="Download the CSV"
        onTextareaInputSubmit={handleTextareaInputCsvSubmit}
      />
    </Segment>
  );
}

JsonConverterContainer.propTypes = {
  className: PropTypes.string,
};
JsonConverterContainer.defaultProps = {
  className: 'converter',
};
export default React.memo(JsonConverterContainer);
