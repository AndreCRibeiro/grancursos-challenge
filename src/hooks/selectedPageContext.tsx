import { createContext, useState, ReactNode, useContext } from 'react';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  selectedPage: 'Dashboard' | 'Other';
  handleChangePage: (page: 'Dashboard' | 'Other') => void;
}

export const PageContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function PageProvider({ children }: TransactionsProviderProps) {
  const [selectedPageValue, setSelectedPageValue] = useState<'Dashboard' | 'Other'>('Dashboard');

  function handleChangePage(e: 'Dashboard' | 'Other') {
    setSelectedPageValue(e)
  }

  return (
    <PageContext.Provider value={{ selectedPage: selectedPageValue, handleChangePage }} >
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext);

  return context;
}