"use client";

import { createContext, useContext, useState } from "react";

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  
  if(!context) {
    throw new Error('useAppContext must ne used within an AppProvider')
  }

  return context;
};

export const AppProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const contextValue: AppContextType = {
    sidebarOpen,
    toggleSidebar
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
