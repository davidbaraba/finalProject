import './App.css';
import Home from './screens/Home';
import './i18n';
import ThemeContext from './ThemeContext';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useState } from 'react';
import Footer from './screens/Footer';
import Header from './screens/Header';

function App() {
  
  const [currentTheme, setCurrentTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
      <Router>
        <div>
          <header className={`App-header-${currentTheme}`}>
            <Header />
          </header>
            <Home />
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
