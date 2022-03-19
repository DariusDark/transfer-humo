import './App.css'
import './i18n'
import useLocalStorage from 'use-local-storage'
import Faq from './components/faq/Faq'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Advantage from './components/advantage/Advantage'
import Application from './components/application/Application'
import Opportunities from './components/opportunities/Opportunities'

import ReactGA from 'react-ga4';
import LogRocket from 'logrocket';

LogRocket.init('4qjnny/test');

const TRACKING_ID = 'G-QGGLMJZ2EB';

ReactGA.initialize(TRACKING_ID);

ReactGA.send('pageview', window.location.pathname);

function App() {
  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');
  const switchMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  window.document.querySelector('html').style.colorScheme = theme;
  return (
    <div className="wrapper" data-theme={theme}>
      <Header handleClick={switchMode} currTheme={theme} />
      <Application />
      <Opportunities />
      <Advantage />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
