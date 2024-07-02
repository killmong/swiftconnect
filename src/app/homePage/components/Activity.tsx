import React from 'react';

interface ActivityItem {
  id: number;
  type: 'story' | 'notification';
  content: string;
  timestamp: string;
  username: string;
  profilePicture: string;
}

const Activity: React.FC = () => {
  const activityFeed: ActivityItem[] = [
    {
      id: 1,
      type: 'story',
      content: 'John Doe mentioned you in a story',
      timestamp: '10 minutes ago',
      username: 'John Doe',
      profilePicture: 'https://example.com/johndoe.jpg',
    },
    {
      id: 2,
      type: 'notification',
      content: 'You have a new follower: Jane Doe',
      timestamp: '1 hour ago',
      username: 'Jane Doe',
      profilePicture: 'https://example.com/janedoe.jpg',
    },
    {
      id: 3,
      type: 'story',
      content: 'You were mentioned in a story by Bob Smith',
      timestamp: '2 hours ago',
      username: 'Bob Smith',
      profilePicture: 'https://example.com/bobsmith.jpg',
    },
    // Add more activity items here...
  ];

  return (
    <div className="col-span-2">
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold mb-4">Activity</h2>
        <ul>
          {activityFeed.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex items-center">
                <img
                  src={item.profilePicture}
                  alt={"rofile avatar"}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <span className="text-sm font-semibold">{item.username}</span>
                  <span className="text-gray-600 text-sm">{item.timestamp}</span>
                </div>
              </div>
              <p className="text-sm">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;