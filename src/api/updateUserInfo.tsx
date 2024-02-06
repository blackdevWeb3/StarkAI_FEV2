import axios from "axios";

type UserData = {
  username: string;
  email: string;
  avatar: string | ArrayBuffer | null;
};

const updateUserInfo = async (userData: UserData) => {
  console.log("Updating user Info:", userData);
  const res = await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/authUpdate`,
    userData
  );
  if (res.data.message === "Success") {
    console.log("Success");
    // setUser(JSON.stringify(userData));
  } else {
    console.log("Fail");
  }
};

export default updateUserInfo;
