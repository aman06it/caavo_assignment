import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
      return (
        <Provider store={store.store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <Dashboard />} />
            </Switch>
          </BrowserRouter>
        </Provider>
      );
}
export default App