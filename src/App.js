import React from "react";
import "./App.css";
import BottomBar from "./components/BottomBar";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import mountains from "./static/mountains.jpg";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2",
      backgroundImage: `url(${mountains})`,
      bottom: 0,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
    },
    text: {
      primary: "#181818",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = React.useState(true);

  return (
    //<div className="App">
    //<header className="App-header">
    //<img src={logo} className="App-logo" alt="logo" />
    //<p>
    //Edit <code>src/App.js</code> and save to reload.
    //</p>
    //<a
    //className="App-link"
    //href="https://reactjs.org"
    //target="_blank"
    //rel="noopener noreferrer"
    //>
    //Learn React
    //</a>
    //</header>
    //</div>

    <div className="App">
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <NavBar />
        <Home />
        <BottomBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
