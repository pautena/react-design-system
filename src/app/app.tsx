import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./root-navigator";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

const theme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Authenticator hideSignUp>
              <BrowserRouter>
                <RootNavigator />
              </BrowserRouter>
            </Authenticator>
          </ThemeProvider>
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
