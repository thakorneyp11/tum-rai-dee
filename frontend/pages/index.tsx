import React, { useContext, useCallback } from 'react';
import Layout from '../components/Layout';
import ActivityCard from '../components/ActivityCard';
import { ActivityContext } from '../context/ActivityContext';

const Home: React.FC = () => {
  const { activities, currentActivityId, setCurrentActivityId } = useContext(ActivityContext);

  const currentActivity = activities.find(activity => activity.id === currentActivityId);

  const handleAction = useCallback((action: 'dislike' | 'soso' | 'like' | 'moreinfo') => {
    if (action === 'moreinfo') {
      // Handle more info action
      console.log('More info for activity:', currentActivityId);
      return;
    }

    // Move to the next activity
    const currentIndex = activities.findIndex(activity => activity.id === currentActivityId);
    const nextIndex = (currentIndex + 1) % activities.length;
    setCurrentActivityId(activities[nextIndex].id);
  }, [activities, currentActivityId, setCurrentActivityId]);

  return (
    <Layout>
      {currentActivity ? (
        <ActivityCard activity={currentActivity} onAction={handleAction} />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-500">No activity available</p>
        </div>
      )}
    </Layout>
  );
};

export default Home;
