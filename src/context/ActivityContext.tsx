import { entries, Entry } from "@/data/entry";
import { createContext, ReactNode, useContext, useState } from "react";

type ActivityContextType = {
  activities: Entry[];
  addActivity: (activity: Entry) => void;
};

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export function ActivityProvider({ children }: { children: ReactNode }) {
  const [activities, setActivities] = useState<Entry[]>(entries);

  const addActivity = (newActivity: Entry) => {
    setActivities((prev) => [...prev, newActivity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivityContext);
  if (!context) throw new Error("useActivities must be used within an ActivityProvider");
  return context;
}