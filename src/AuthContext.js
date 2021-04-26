import React from "react";

export const Authentication = {
  authenticated: false,
};

const AuthContext = React.createContext(Authentication);

export default AuthContext;
