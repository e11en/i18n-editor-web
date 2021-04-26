import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import AuthContext from "./AuthContext";
import Header from "./components/HeaderComponent";
import Content from "./components/ContentComponent";
import Footer from "./components/FooterComponent";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#46ACDB",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#d78b9c",
      contrastText: "#FFF",
    },
  },
});

function App() {
  return (
    <AuthContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
