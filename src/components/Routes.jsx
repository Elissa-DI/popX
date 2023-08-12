/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './home';
import CreateAccount from './create';
import SignIn from './signin';
import Account from './account';

const Routed = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default Routed;
