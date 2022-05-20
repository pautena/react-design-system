import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import './app.css'
import { RootNavigator } from './navigators/root-navigator';
import {Auth} from 'aws-amplify';
import { CognitoAuthConfig } from './configs/aws';
import { Provider } from "react-redux";
import { store } from './store';

Auth.configure(CognitoAuthConfig);

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <RootNavigator/>
    </BrowserRouter>
      </Provider>
  );
}

export default App;
