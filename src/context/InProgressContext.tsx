import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type InProgressContextType = {
  inProgressIds: string[];
  toggleInProgress: (id: string) => void;
};

const InProgressContext = createContext<InProgressContextType | undefined>(undefined);

const STORAGE_KEY = '@activity_tracker_in_progress';

export function InProgressProvider({ children }: { children: ReactNode }) {
  const [inProgressIds, setInProgressIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const storedIds = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedIds) {
          setInProgressIds(JSON.parse(storedIds));
        }
      } catch (e) {
        console.error("Failed to load in-progress items", e);
      } finally {
        setIsLoaded(true);
      }
    };
    loadState();
  }, []);

  useEffect(() => {
    if (!isLoaded) return; // Prevent saving the empty default array over the real data

    const saveState = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(inProgressIds));
      } catch (e) {
        console.error("Failed to save in-progress items", e);
      }
    };
    saveState();
  }, [inProgressIds, isLoaded]);

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