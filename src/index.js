import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

window.dataLayer.push({ "event": "test" })

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

