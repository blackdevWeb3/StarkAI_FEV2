import axios from "axios";

type UserData = {
  username: string;
  email: string;
  avatar: string | ArrayBuffer | null;
};
type forgotData = {
  email: string;
};

interface LoginResponse {
  message: string;
  token?: string;
}

interface ForgotResponse {
  message: string;
  verificationCode?: string;
  expiryTime?: string;
}

type ResetData = {
  email: string;
  password: string;
};

export const loginUserInfo = async (
  userData: UserData
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/login`,
      userData
    );

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
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

export const forgotPasswordAction = async (
  email: forgotData
): Promise<ForgotResponse> => {
  console.log("email:", email);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/forgot-password`,
      email
    );
    if (res.status === 200) {
      console.log("sent verification code");
      return res.data;
    } else {
      console.error("Failed to send");
      return res.data;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    throw new Error(error.message);
  }
};

export const resetUserPassword = async (
  userData: ResetData
): Promise<boolean> => {
  console.log("email:", userData);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth/reset-password`,
      userData
    );
    if (res.status === 200) {
      console.log("Success Reset Password!");
      return true;
    } else {
      console.error("Failed to set");
      return false;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    throw new Error(error.message);
  }
};
