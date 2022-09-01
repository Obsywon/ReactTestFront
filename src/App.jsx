import "./styles/App.css";
import "./styles/index.css";
import Basic from "./Layouts/Basic";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";
import Utilisateurs from "./Pages/Utilisateurs";
import RequireAuth from "./Services/RequireAuth";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Test - Site React"
}, [])

  return (

    <ThemeProvider value={true}>
      <BrowserRouter>
        <Routes>
          <Route element={<Basic />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/utilisateurs" element={<Utilisateurs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
