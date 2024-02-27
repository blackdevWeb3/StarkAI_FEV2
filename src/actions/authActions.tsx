import axios from "axios";

type UserData = {
  username: string;
  email: string;
  avatar: string | ArrayBuffer | null;
};

interface LoginResponse {
  message: string;
  token?: string;
}

export const loginUserInfo = async (
  userData: UserData
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/login`,
      userData
    );
    // Set the token in localStorage only if status is 200.
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
    }

    // Return response data irrespective of status code.
    return response.data;
  } catch (error) {
    // Send back the error response data if it exists.
    if (error.response) {
      return error.response.data;
    }

    // Rethrow the error or handle it as needed.
    throw error;
  }
};

export const registerUserInfo = async (
  userData: UserData
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/register`,
      userData
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const updateUserInfo = async (userData: UserData): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/authUpdate`,
      userData
    );

    if (res.data.message === "Success") {
      console.log("User info updated successfully");
      return true;
    } else {
      console.error("Failed to update user info");
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific Axios error
      console.error("Error updating user info:", error.response?.data);
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
    return false;
  }
};
