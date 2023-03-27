import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent sito="https://cdn.britannica.com/28/148428-050-5EC50B76/Flint-Hills-region-Great-Plains-Kansas.jpg" alt="plain"/>
        <ButtonComponent nomeBottone= "Bottone"/>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
