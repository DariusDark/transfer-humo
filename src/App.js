import './App.css'
import useLocalStorage from 'use-local-storage'
import Faq from './components/faq/Faq'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Advantage from './components/advantage/Advantage'
import Application from './components/application/Application'
import Opportunities from './components/opportunities/Opportunities'

function App() {
  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');
  const switchMode = () => {
    console.log(theme)
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className="wrapper" data-theme={theme}>
      <Header handleClick={switchMode} />
      <Application />
      <Opportunities />
      <Advantage />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
