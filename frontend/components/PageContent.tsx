import React from 'react';

interface PageContentProps {
  title: string;
}

const PageContent: React.FC<PageContentProps> = ({ title }) => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">{title}</h1>
    </div>
  );
};

export default PageContent;
