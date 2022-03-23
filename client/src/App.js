import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/routes.index";
import JwtProvider from "./providers/jwtProvider";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeConfig from "./theme/theme";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <ThemeConfig>
      <div className="App" theme={theme}>
        <JwtProvider>
          <ChakraProvider>
            <Router />
          </ChakraProvider>
        </JwtProvider>
      </div>
    </ThemeConfig>
  );
}

export default App;
