import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./navigators";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Auth } from "aws-amplify";
import { CognitoAuthConfig } from "./configs/aws";
import { Provider } from "react-redux";
import { store } from "./store";

Auth.configure(CognitoAuthConfig);

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <RootNavigator />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
