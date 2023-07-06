//react create context function
import React, { createContext } from "react";
const UserContext = createContext();

export default function DetailsProvider({ children }) {
	return <UserContext.Provider value="Reed">{children}</UserContext.Provider>;
}
