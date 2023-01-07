import './App.css';
import Navigation from './Components/Navigation';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { Socialicons } from './Components/SocialLinks';
import { useEffect } from 'react';
import withRouter from "./Context/withRouter"
import AppRoutes from './AppRoutes';

function App() {
  const helmetContext = {}
  function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return <>{props.children}</>;
  };

  const ScrollToTopMount = withRouter(ScrollToTop)

  return (
    <HelmetProvider context={helmetContext}>
      <Router >
        <Navigation />
        <ScrollToTopMount>
          <AppRoutes />
          <Socialicons />
        </ScrollToTopMount>
      </Router>
    </HelmetProvider>
  );
}

export default App;
