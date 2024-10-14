import React, { useState, useEffect } from 'react';
import ActionButtons from './ActionButtons';
import ActivityCardDetail from './ActivityCardDetail';
import { Activity } from '../utils/activityData';

interface ActivityCardProps {
  activity: Activity;
  onAction: (action: 'dislike' | 'soso' | 'like' | 'moreinfo') => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onAction }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsFlipped(false);
  }, [activity.id]);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleImageChange = (direction: 'prev' | 'next') => {
    if (!activity.images || activity.images.length === 0) return;
    if (direction === 'prev') {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? activity.images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % activity.images.length
      );
    }
  };

  const handleAction = (action: 'dislike' | 'soso' | 'like' | 'moreinfo') => {
    if (action === 'moreinfo') {
      setIsFlipped(!isFlipped);
    } else {
      onAction(action);
    }
  };


  return (
    <div className="w-[100%] mx-auto max-w-md h-[calc(100vh-140px)] relative [perspective:1000px]">
      <div 
        className={`w-full h-full transition-all duration-700 ease-in-out absolute [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of the card */}
        <div 
          className="w-full h-full absolute bg-white rounded-lg shadow-lg overflow-hidden [backface-visibility:hidden]"
        >
          <div className="w-full h-full relative">
            {activity.images && activity.images.length > 0 ? (
              <img 
                src={activity.images[currentImageIndex]} 
                alt={`Activity image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex justify-center items-center text-gray-500 text-lg">
                [no available image]
              </div>
            )}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between space-x-1">
              {activity.images && activity.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1 rounded-md flex-grow ${
                    index === currentImageIndex 
                      ? 'bg-white ring-2 ring-gray-300' 
                      : 'bg-white bg-opacity-50'
                  } transition-all duration-300 ease-in-out`}
                />
              ))}
            </div>
            {activity.images && activity.images.length > 1 && !isFlipped && (
              <>
                <button 
                  className="absolute left-0 top-8 w-1/4 h-3/5 opacity-0 z-10"
                  onClick={() => handleImageChange('prev')}
                />
                <button 
                  className="absolute right-0 top-8 w-1/4 h-3/5 opacity-0 z-10"
                  onClick={() => handleImageChange('next')}
                />
              </>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{activity.title}</h2>
            <div 
              className={`text-sm mb-4 overflow-y-auto transition-all duration-300 ease-in-out cursor-pointer ${
                isDescriptionExpanded ? 'max-h-48' : 'max-h-16'
              }`}
              onClick={toggleDescription}
            >
              <p>{activity.description}</p>
            </div>
            <ActionButtons onAction={handleAction} isFlipped={false} />
          </div>
        </div>
        {/* Back of the card (detailed view) */}
        <div 
          className="w-full h-full absolute bg-white rounded-lg shadow-lg overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <ActivityCardDetail activity={activity} onAction={handleAction} />
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
