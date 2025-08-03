import React from "react";
import { auth } from "../firebase/firebaseConfig";

const Header = () => {
  const user = auth.currentUser;

  return (
    <header className="header">
      <span className="user-info">
        Sesión iniciada como: <strong>{user?.email}</strong>
      </span>
    </header>
  );
};

export default Header;