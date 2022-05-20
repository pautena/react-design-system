import React from 'react';
import {Box,Typography} from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { RootNavigator } from './navigators/root-navigator';

function App() {
  return (
    <BrowserRouter>
      <RootNavigator/>
    </BrowserRouter>
  );
}

export default App;
