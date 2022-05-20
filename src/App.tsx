import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./navigators";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Auth } from "aws-amplify";
import { CognitoAuthConfig } from "./configs/aws";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

Auth.configure(CognitoAuthConfig);

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <RootNavigator />
            </BrowserRouter>
          </ThemeProvider>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
