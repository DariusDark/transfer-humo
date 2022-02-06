import './App.css';
import Faq from './components/faq/Faq';
import Header from './components/header/Header'
import Advantage from './components/advantage/Advantage'
import Application from './components/application/Application'
import Opportunities from './components/opportunities/Opportunities'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Application />
      <Opportunities />
      <Advantage />
      <Faq />
    </div>
  );
}

export default App;
