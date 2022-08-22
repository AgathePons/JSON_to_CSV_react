// == Import
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

// == Composant
function App() {
  return (
    <div className="app">
      <Title title="Titre Prop" />
      <Paragraph text="Lorem blabla" />
    </div>
  );
}

// == Export
export default App;
