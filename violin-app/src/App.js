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
import { QueryClient, QueryClientProvider } from 'react-query'
 
 const queryClient = new QueryClient()

function App() {
  
  const [currentTheme, setCurrentTheme] = useState('light');
  
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
