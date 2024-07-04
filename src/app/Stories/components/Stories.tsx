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
    <div className=" flex overflow-x-hidden  p-4 bg-slate-900 border-2 rounded-lg mb-2 hover:border-sky-200 border-sky-400 shadow-xl ">
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
