import axios from "axios";

type UserData = {
  username: string;
  email: string;
  avatar: string | ArrayBuffer | null;
};

const registerUserInfo = async (userData: UserData) => {
  const res = await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/login`,
    userData
  );
  return res.data.message;
};

export default registerUserInfo;
