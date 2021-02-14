import React, { createContext, useState } from "react";

export const UserContext = createContext();
const { Provider } = UserContext;

export const UserProvider = ({ children, ...others }) => {
    const [user, setUser] = useState(false);

    return <Provider value={{ user, setUser }}>{children}</Provider>;
};
