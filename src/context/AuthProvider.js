// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";
// import { createContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const accessToken = Cookies.get("accessToken");
//   let user = null;
//   if (accessToken) {
//     user = jwtDecode(accessToken);
//   }
//   const [auth, setAuth] = useState(user ? { user: user.email } : {});
//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
