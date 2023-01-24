import React, { useEffect, useState } from "react";
import "../../css/profile/ProfileDetails/profile-details.css";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileInformation } from "./ProfileDetails/ProfileInformation";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProfileDetails = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const { user: currentUser } = useSelector((state) => state.user);

  const getUser = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };

    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${params.id}`,
      options
    );
    const userData = await res.json();
    setUser(userData);
  };

  useEffect(() => {
    if (params.id) {
      getUser();
    }
  }, []);

  return (
    <div className="profile-details">
      {console.log(user)}
      {user ? (
        <>
          <ProfileInformation user={user} />
          <ExperienceSection userId={user._id}/>
        </>
      ) : (
        <>
          <ProfileInformation user={currentUser} />
          <ExperienceSection />
        </>
      )}
    </div>
  );
};
