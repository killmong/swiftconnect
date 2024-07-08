import React from "react";
import StoriesItem from "./StoriesItem";
export interface User {
  username: string;
  profilePicture: string;
}

export interface Props {
  users: User[];
}


const Stories: React.FC<Props> = ({ users }) => {
  return (
    <div className=" flex overflow-x-hidden max-w-xs md:max-w-2xl  p-4 bg-slate-900 border border-black rounded-lg mb-2 hover:border-gray-700  shadow-xl ">
      {users.map((user) => (
        <StoriesItem
          key={user.username}
          username={user.username}
          profilePicture={user.profilePicture}
        />
      ))}
    </div>
  );
};

export default Stories;
