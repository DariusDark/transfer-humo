import './App.css';
import Header from './components/header/Header'
import Application from './components/application/Application'
import Opportunities from './components/opportunities/Opportunities'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Application />
      <Opportunities />
    </div>
  );
}

export default App;
