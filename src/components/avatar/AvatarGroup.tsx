import React, { useState } from 'react';
import './avatar.css'; 

interface User {
  id: number;
  name: string;
  avatarUrl?: string; 
}

export interface AvatarGroupProps {
  users: User[];
  size: 'small' | 'medium' | 'large';
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ users, size }) => {
  const maxUserAv = 3;

  const UserTerlihat = users.slice(0, Math.min(users.length, maxUserAv ));;
  const hiddenUsers = users.slice(maxUserAv);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMoreClick = () => {
    setShowDropdown(!showDropdown);
  };


  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
  };

  return (
    <div className={`flex items-center avatar-group-${size}`}>
      {UserTerlihat.map((user) => (
        <div key={user.id} className="avatar">
          {user.avatarUrl ? (
            <img
              className="avatar-image"
              src={user.avatarUrl}
              alt={user.name}
            />
          ) : (

            
            <div className="avatar-initial">
              {getInitials(user.name)}
            </div>
          )}
        </div>
      ))}
      {hiddenUsers.length > 0 && (
        <div className="flex items-center justify-center mr-2  bg-gray-300 w-10 h-10 rounded-full  cursor-pointer" onClick={handleMoreClick}>
          +{hiddenUsers.length }
          {showDropdown && (
            <div className="absolute bg-white border rounded-md shadow-md shadow-md mt-2 ">
              {hiddenUsers.map((user) => (
                <div key={user.id} className="dropdown-item">
                  {user.avatarUrl ? (
                    <img
                      className="w-[100%] h-[100%] rounded-full object-cover"
                      src={user.avatarUrl}
                      alt={user.name}
                    />
                  ) : (
                    <div className="flex items-center justify-center mr-2  bg-gray-300 w-10 h-10 rounded-full ring-2 ring-white text-blue-500 bg-blue-100 font-bold">
                      {getInitials(user.name)}
                    </div>
                  )}
                  <span>{user.name}</span>

                  
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
