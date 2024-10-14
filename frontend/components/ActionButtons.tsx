import React from 'react';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-around">
      {[
        { label: '❌', value: 'dislike', color: 'text-red-500', hoverColor: 'hover:text-red-800' },
        { label: '😐', value: 'soso', color: 'text-accent', hoverColor: 'hover:text-accent-dark' },
        { label: '♥', value: 'like', color: 'text-secondary', hoverColor: 'hover:text-secondary-dark' },
        { label: 'ℹ️', value: 'moreinfo', color: 'text-primary', hoverColor: 'hover:text-primary-dark' },
      ].map((button, index) => (
        <button
          key={index}
          className={`w-12 h-12 rounded-full bg-white shadow-md text-2xl flex justify-center items-center ${button.color} ${button.hoverColor} transition-all duration-200 ease-in-out hover:shadow-lg transform hover:-translate-y-1`}
          onClick={() => console.log('button clicked as ' + button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
