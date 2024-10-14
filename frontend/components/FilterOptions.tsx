import React from 'react';

interface FilterOptionsProps {
  onClose: () => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto h-full w-full z-50">
      <div className="relative top-2 mx-auto p-5 border w-[95%] shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-primary">Filter Options</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="partySize" className="block text-sm font-medium text-primary mb-1">Party Size</label>
            <select id="partySize" name="partySize" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="alone">Alone</option>
              <option value="withFriends">With Friends</option>
              <option value="withFamily">With Family</option>
              <option value="withPartner">With Partner</option>
              <option value="withColleagues">With Colleagues</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="activity" className="block text-sm font-medium text-primary mb-1">Activity Type</label>
            <select id="activity" name="activity" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="cultural">Cultural</option>
              <option value="adventurous">Adventurous</option>
              <option value="relaxing">Relaxing</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-primary mb-1">Location</label>
            <select id="location" name="location" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="bangkok">Bangkok</option>
              <option value="nonBangkok">Non-Bangkok</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-primary mb-1">Time</label>
            <select id="time" name="time" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="weather" className="block text-sm font-medium text-primary mb-1">Weather</label>
            <select id="weather" name="weather" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="sunny">Sunny</option>
              <option value="rainy">Rainy</option>
              <option value="cloudy">Cloudy</option>
              <option value="windy">Windy</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium text-primary mb-1">Budget</label>
            <select id="budget" name="budget" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Select...</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary text-white p-2 rounded-md hover:bg-secondary transition-colors">
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterOptions;
