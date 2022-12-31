import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import RoutesApp from "./routes/RoutesApp";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
