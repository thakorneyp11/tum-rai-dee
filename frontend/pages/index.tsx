import React, { useContext } from 'react';
import Layout from '../components/Layout';
import ActivityCard from '../components/ActivityCard';
import { ActivityContext } from '../context/ActivityContext';

const Home: React.FC = () => {
  const { currentActivity } = useContext(ActivityContext);

  return (
    <Layout>
      {currentActivity ? (
        <ActivityCard activity={currentActivity} />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-500">No activity available</p>
        </div>
      )}
    </Layout>
  );
};

export default Home;
