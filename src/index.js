import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const TRAKING_ID = 'G-QGGLMJZ2EB';

ReactGA.initialize(TRAKING_ID);
ReactGA.send('pageview');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

