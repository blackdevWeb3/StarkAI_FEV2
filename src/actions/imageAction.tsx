import axios from "axios";

export const deleteImageAction = async (image: string): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/deleteImage`,
      { image }
    );

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false; // Return false in case of an error
  }
};
