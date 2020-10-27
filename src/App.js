import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: "#757ce8",
      main: "#ffc107",
      // dark: "#002884",
      // contrastText: "#fff",
    },
    secondary: {
      // light: "#ff7961",
      main: "#ff9100",
      // dark: "#ba000d",
      // contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
