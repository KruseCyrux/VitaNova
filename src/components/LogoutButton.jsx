import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}

export default LogoutButton;