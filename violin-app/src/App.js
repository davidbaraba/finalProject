import './App.css';
import Home from './screens/Home';
import ThemeContext from './ThemeContext';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Footer from './screens/Footer';
import Header from './screens/Header';
import { QueryClient, QueryClientProvider } from 'react-query'
import ScrollToTop from './ScrollerToTop';
 
const queryClient = new QueryClient()

function App() {
  
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(()=>{
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme){
      setCurrentTheme(currentTheme);
    }
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
        <Router>
          <ScrollToTop />
          <div>
            <header className={`App-header App-header-${currentTheme}`}>
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
