import Butter from "buttercms";

// Using a non-null assertion to tell TypeScript that the environment variable will always be defined
const butter = Butter(process.env.REACT_APP_BUTTER_API_KEY!);

export default butter;
