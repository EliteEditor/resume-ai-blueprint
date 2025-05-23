import React from 'react';
import { useUser } from '@/contexts/UserContext';

const ProfilePage: React.FC = () => {
  const { userData, setUserData } = useUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Name:</h2>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Email:</h2>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
        </div>
        {/* Add more fields here with input elements and handleInputChange */}
      </div>
    </div>
  );
};

export default ProfilePage; 