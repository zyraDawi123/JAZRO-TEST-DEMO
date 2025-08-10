import logo from './logo.svg';
import './App.css';
import Header from './Header';
import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';

function App() {
  return <div className="App">
      <Header/>
      <PokemonList/>
      <PokemonCard/>
    </div>;
  
}

export default App;
