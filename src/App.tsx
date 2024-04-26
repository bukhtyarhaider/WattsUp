import { createContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { navItems } from "./content";
import "./main.scss";
import Router from "./Router";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import FAQSection from "./components/FAQSection/FAQSection";
import TruckJourney from "./components/TruckJourney/TruckJourney";
import Footer from "./components/Footer/Footer";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

function App() {
  const [theme, setTheme] = useState("light");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" id={theme}>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Topbar navItems={navItems} />
                <Router />
                <FAQSection />
                <TruckJourney />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>

  );
}


export default App;