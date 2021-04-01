import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinList from './CoinList';
import Header from './Header';
import WatchList from './WatchList';
import ChartData from './ChartData';
import { WatchListDataContextProvider } from './WatchListData';

const App = () => (
  <div>
    <WatchListDataContextProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinList} />
        <Route exact path="/WatchList" component={WatchList} />
        <Route exact path="/WatchList/:id" component={ChartData} />
      </BrowserRouter>
    </WatchListDataContextProvider>
  </div>
);

export default App;
