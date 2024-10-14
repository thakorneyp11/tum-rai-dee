import React from 'react';
import { Activity } from '../utils/activityData';
import ActionButtons from './ActionButtons';

interface ActivityCardDetailProps {
  activity: Activity;
  onAction: (action: 'dislike' | 'soso' | 'like' | 'moreinfo') => void;
}

const ActivityCardDetail: React.FC<ActivityCardDetailProps> = ({ activity, onAction }) => {
  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col">
      <div className="flex-grow overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">{activity.title}</h2>
        <div className="text-gray-700 space-y-4">
          <p><strong>Location:</strong> {activity.location}</p>
          <p><strong>Duration:</strong> {activity.duration}</p>
          <p><strong>Best Time to Visit:</strong> {activity.bestTimeToVisit}</p>
          <p><strong>Price Range:</strong> {activity.priceRange}</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Detailed Description</h3>
          <p>{activity.detailedDescription}</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Tips</h3>
          <ul className="list-disc list-inside">
            {activity.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-t from-black to-transparent">
        <ActionButtons onAction={onAction} isFlipped={true} />
      </div>
    </div>
  );
};

export default ActivityCardDetail;
