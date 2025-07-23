import React, { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description?: string;
}

const Title: React.FC<PageMetaProps> = ({ title, description }) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    if (description) {
      // Try to find existing meta description tag
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;

      if (metaDescription) {
        metaDescription.content = description;
      } else {
        // Create and append meta description if missing
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);

  return null; // No UI output
};

export default Title;