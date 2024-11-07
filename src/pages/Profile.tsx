import React from "react";
import { useAuth } from "../AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="page-holder">
      <h1>Profile</h1>
      {user && (
        <div>
          <img src={user.photoURL || ""} alt="Profile" />
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;