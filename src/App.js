import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Matosinhos"/>
          </div>
        </div>
      </div>
      <a href="https://github.com/T-allegro/weather-project-react" rel="noreferrer" target="_blank" className="github-url">Teresa Allegro_Github repository</a>
    </div>
  );
}

