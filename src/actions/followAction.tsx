import axios, { AxiosError } from "axios";

type FollowData = {
  email: string;
  creator: string;
};

export const handleFollowAction = async (data: FollowData): Promise<string> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/follow/handle-follower`,
      data
    );

    // Ensure that response.data.message exists and is a string.
    if (typeof response.data.message === "string") {
      return response.data.message;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    // Log the error for debugging purposes. In a production environment,
    // you might do more than console logging such as sending to an error tracking service.
    console.error("Error in handleFollowAction:", error);

    // Return a default error message. This should be a meaningful message for the end user.
    return "Unable to process follow action at this time.";
  }
};

export const getFollowerAction = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/follow/get-follower`,
      data
    );
    return response.data;
  } catch (error) {
    // Handle the different kinds of errors that might occur
    if (error instanceof AxiosError) {
      // Handle AxiosError specifically if required
      console.error("Axios error:", error.message);

      // Optionally handle based on response status code
      if (error.response) {
        console.error("Error response data:", error.response.data);
        // Return an error message or object depending on your API contract
        return {
          error: "Error fetching follower data.",
          details: error.response.data,
        };
      }
    } else if (error instanceof Error) {
      // Handle general Error instances
      console.error("General error:", error.message);
    } else {
      // Handle cases where error might not be an instance of Error
      console.error("Unknown error:", error);
    }

    // Provide a generic fallback error structure to maintain promise return type consistency
    return {
      error: "An unexpected error occurred while fetching follower data.",
    };
  }
};

export const getFollowerImageAction = async (data: FollowData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/follow/get-follower-image`,
      data
    );
    if (response.status === 200) return response.data.fetchedImages;
  } catch (error) {
    // Handle the different kinds of errors that might occur
    if (error instanceof AxiosError) {
      // Handle AxiosError specifically if required
      console.error("Axios error:", error.message);

      // Optionally handle based on response status code
      if (error.response) {
        console.error("Error response data:", error.response.data);
        // Return an error message or object depending on your API contract
        return {
          error: "Error fetching follower data.",
          details: error.response.data,
        };
      }
    } else if (error instanceof Error) {
      // Handle general Error instances
      console.error("General error:", error.message);
    } else {
      // Handle cases where error might not be an instance of Error
      console.error("Unknown error:", error);
    }

    // Provide a generic fallback error structure to maintain promise return type consistency
    return {
      error: "An unexpected error occurred while fetching follower data.",
    };
  }
};
