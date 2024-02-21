import axios from "axios";

type UserData = {
  username: string;
  email: string;
  avatar: string | ArrayBuffer | null;
};

export const registerUserInfo = async (userData: UserData): Promise<string> => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/login`,
      userData
    );
    return res.data.message;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios error. For example, data from an error response
      console.error("Axios error:", error.response?.data);
      throw new Error(
        (error.response?.data as string) || "An unknown error occurred"
      );
    } else {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
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
