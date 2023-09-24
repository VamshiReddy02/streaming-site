import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async () => {
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching data from the API:", error);
    throw error; // You can rethrow the error or handle it differently
  }
};
