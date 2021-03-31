import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
