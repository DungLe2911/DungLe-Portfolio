import axios from "axios"

const BASE_URL = "https://dung-le-portfolio.vercel.app/api/leetcode-profile";
export const fetchUserProfile = async() =>{
    const response = await axios.get(BASE_URL);
    return response;
}