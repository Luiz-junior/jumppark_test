import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import Home from './pages/home/Home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
