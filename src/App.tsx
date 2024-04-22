import { createContext, useState } from "react";
import "./main.scss";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import { navItems } from "./content";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <Topbar navItems={navItems} />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}


export default App;