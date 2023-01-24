export const getUserProfile = () => {
  return async (dispatch, getState) => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };

    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      options
    );
    const userData = await res.json();
    dispatch({
      type: "GET_USER_PROFILE",
      payload: userData,
    });
  };
};
export const newTextArea = (userName) => {
  return async (dispatch, getState) => {
    dispatch({
      type: "GET_NEW_NAME",
      payload: userName,
    });
  };
  console.log(userName);
};

export const submitEditProfile = (e, name, surname, title, bio, area) => {
  e.preventDefault();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      title: title,
      bio: bio,
      area: area,
    }),
  };
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      options
    );
    console.log(await res.json());

    dispatch(getUserProfile());
  };
};
