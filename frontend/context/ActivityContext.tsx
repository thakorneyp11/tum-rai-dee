import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getActivities, Activity } from '../utils/activityData';

interface ActivityContextType {
  activities: Activity[];
  currentActivityId: number | null;
  setCurrentActivityId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  currentActivityId: null,
  setCurrentActivityId: () => {},
});

interface ActivityProviderProps {
  children: ReactNode;
}

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivityId, setCurrentActivityId] = useState<number | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      setActivities(data);
      if (data.length > 0) {
        setCurrentActivityId(data[0].id);
      }
    };
    fetchActivities();
  }, []);

  const value = {
    activities,
    currentActivityId,
    setCurrentActivityId,
  };

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
}
