import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./navigators";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Auth } from "aws-amplify";
import { CognitoAuthConfig } from "./configs/aws";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

Auth.configure(CognitoAuthConfig);

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <RootNavigator />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
