import './App.css';
import { Title } from './components/Title/Title';
import { WeatherWrapper } from './components/WeatherWrapper/WeatherWrapper';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <WeatherWrapper></WeatherWrapper>
    </div>
  );
}

export default App;
