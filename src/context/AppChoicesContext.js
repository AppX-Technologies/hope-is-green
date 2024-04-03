import { createContext } from "react";
import CachedResponse from "../components/common/CachedResponse";

const AppChoicesContext = createContext();

export const AppChoicesProvider = ({ children }) => {
    return (
      <CachedResponse
        listEndpoint={"app-choices"}
        restrictedRoutes={[]}
        render={(appChoices) => (
          <AppChoicesContext.Provider value={appChoices}>
            {children}
          </AppChoicesContext.Provider>
        )}
      />
    );
  };
  

export default AppChoicesContext;
