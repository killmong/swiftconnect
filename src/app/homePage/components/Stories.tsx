'use client'
import React, { useEffect, useState } from 'react';

interface Story {
  id: number;
  username: string;
  profilePicture: string;
  content: string;
  timestamp: string;
}

const persons = [
  'John Doe',
  'Jane Doe',
  'Bob Smith',
  'Alice Johnson',
  'Mike Brown',
];

const storyContent = [
  'Just had the best coffee of my life!',
  'Check out my new profile picture!',
  'Just got back from an amazing vacation!',
  'Feeling grateful for my friends and family',
  'Excited for the weekend!',
];

const Stories: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRandomImages = async () => {
      const promises = persons.map(async (person, index) => {
        try {
          const response = await fetch(`https://picsum.photos/seed/${index}/80/80`);
          if (!response.ok) {
            throw new Error('Failed to fetch profile picture');
          }
          const profilePicture = response.url;

          const content =
            storyContent[Math.floor(Math.random() * storyContent.length)];
          const timestamp = `${Math.floor(Math.random() * 60)} minutes ago`;

          return {
            id: index,
            username: person,
            profilePicture,
            content,
            timestamp,
          };
        } catch (error) {
          console.error('Error fetching profile picture:', error);
          return null; // Return null for failed fetch
        }
      });

      try {
        const storiesData = await Promise.all(promises);
        // Filter out null values before setting state
        setStories(storiesData.filter((story): story is Story => story !== null));
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchRandomImages();
  }, []);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 3000); // change story every 3 seconds

    return () => clearInterval(sliderInterval);
  }, [stories]);

  return (
    <div className="bg-white flex flex-1 p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-4">Stories</h2>
      <ul className="flex flex-row justify-center">
        {stories.map((story, index) => (
          <li
            key={story.id}
            className={`mr-4 ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="flex flex-col items-center">
              <img
                src={story.profilePicture}
                alt={story.username}
                className="w-8 h-8 rounded-full mb-2"
              />
              <div>
                <span className="text-sm font-semibold">{story.username}</span>
                <span className="text-gray-600 text-sm">{story.timestamp}</span>
              </div>
              <p className="text-sm">{story.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
