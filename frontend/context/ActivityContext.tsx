import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getActivities, Activity } from '../utils/activityData';

interface ActivityContextType {
  activities: Activity[];
  currentActivity: Activity | null;
  setCurrentActivity: React.Dispatch<React.SetStateAction<Activity | null>>;
}

export const ActivityContext = createContext<ActivityContextType>({
  activities: [],
  currentActivity: null,
  setCurrentActivity: () => {},
});

interface ActivityProviderProps {
  children: ReactNode;
}

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const data = await getActivities();
      setActivities(data);
      setCurrentActivity(data[0]);
    };
    fetchActivities();
  }, []);

  const value = {
    activities,
    currentActivity,
    setCurrentActivity,
  };

  return <ActivityContext.Provider value={value}>{children}</ActivityContext.Provider>;
}
