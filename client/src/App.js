import logo from './logo.svg';
import './App.css';
import Router from "./routes/routes.index";
import JwtProvider from "./providers/jwtProvider";


function App() {
  return (
    <div className="App">
      <JwtProvider>
      <Router/>

      </JwtProvider>
    </div>
  );
}

export default App;
