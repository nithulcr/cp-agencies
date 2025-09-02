import React, { createContext, useContext, ReactNode } from 'react';

interface LangContextType {
  lang: string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children, lang }: { children: ReactNode; lang: string }) => {
  return (
    <LangContext.Provider value={{ lang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLangContext must be used within a LangProvider');
  }
  return context;
};
