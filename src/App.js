import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './nav';
import Home from './Pages/home';
import Photo from './Pages/photo';
import Post from './Pages/post/App';
import Contracts from './Pages/contactList/App';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/post">
            <Post />
            <Post />
            <Post />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>
          <Route path="/contact-list">
            <Contracts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
