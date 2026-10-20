import { createContext, ReactNode, useContext, useState } from 'react';

type InProgressContextType = {
  inProgressIds: string[];
  toggleInProgress: (id: string) => void;
};

const InProgressContext = createContext<InProgressContextType | undefined>(undefined);

export function InProgressProvider({ children }: { children: ReactNode }) {
  const [inProgressIds, setInProgressIds] = useState<string[]>([]);

  const toggleInProgress = (id: string) => {
    setInProgressIds((prev) => 
      prev.includes(id) 
        ? prev.filter((existingId) => existingId !== id)
        : [...prev, id]
    );
  };

  return (
    <InProgressContext.Provider value={{ inProgressIds, toggleInProgress }}>
      {children}
    </InProgressContext.Provider>
  );
}

export function useInProgress() {
  const context = useContext(InProgressContext);
  if (!context) {
    throw new Error("useInProgress must be used within an InProgressProvider");
  }
  return context;
}