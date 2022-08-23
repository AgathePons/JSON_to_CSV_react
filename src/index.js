// == Import : npm
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import : local
import App from 'src/containers/AppContainer';

// == Render
const rootReactElement = <App />;
const target = document.getElementById('root');
render(rootReactElement, target);
