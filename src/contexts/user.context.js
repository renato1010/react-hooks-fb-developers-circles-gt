import React, { useState } from "react";

export const UserContext = React.createContext();
export function UserProvider(props) {
  const [user, setUser] = useState(null);

  const changeUser = newUser => setUser(newUser);
  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
