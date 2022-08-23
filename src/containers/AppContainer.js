// == Import
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import JsonConverterContainer from './JsonConverterContainer';

// == Composant
function App() {
  return (
    <div className="app">
      <Title title="JSON to CSV converter" />
      <Paragraph text="Past the JSON code and click the button to download your csv file" />
      <JsonConverterContainer />
    </div>
  );
}

// == Export
export default App;
