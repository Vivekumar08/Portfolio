import React from "react";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Socialicons } from "./Components/SocialLinks";
import withRouter from "./Context/withRouter";
import { Route, Routes } from "react-router-dom";

const AnimatedSwitch = withRouter(({ router }) => (
  <TransitionGroup>
    <CSSTransition
      key={router.location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

const AppRoutes = () => {
  return (
    <div>
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
};

export default AppRoutes;
