import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import { RootNavigator } from './navigators/root-navigator';
import {Auth} from 'aws-amplify';
import { CognitoAuthConfig } from './configs/aws';

Auth.configure(CognitoAuthConfig);

function App() {
  return (
    <BrowserRouter>
      <RootNavigator/>
    </BrowserRouter>
  );
}

export default App;
