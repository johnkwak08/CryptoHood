import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinList from './CoinList';
import Header from './Header';
import WatchList from './WatchList';
// import axios from 'axios';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Route exact path="/" component={CoinList} />
        <Route exact path="/WatchList" component={WatchList} />
      </BrowserRouter>
    </div>
  );
};

export default App;
