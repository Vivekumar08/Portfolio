import './App.css';

import Home from './Pages/Home/Home';
import Navigation from './Components/Navigation';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Socialicons } from './Components/SocialLinks';
import NotFound from './Pages/NotFound';


function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Socialicons />
        <Navigation />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<NotFound />} path="*" />
        </Routes >
      </Router>
    </HelmetProvider>
  );
}

export default App;
