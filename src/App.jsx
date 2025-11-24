import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import WelcomeScreen from './pages/WelcomeScreen';
import { CVProvider } from "./contexts/CVContext";
import Contact from "./pages/Contact";
import AlergiasForm from "./pages/AlergiasForm";

function App() {
  return (
    <AuthProvider>
      <CVProvider> {/* Agregado */}
        <Router>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacto" element={<Contact />} /> 
            <Route path="/alergias" element={<AlergiasForm />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </CVProvider> {/* Agregado */}
    </AuthProvider>
  );
}

export default App;


