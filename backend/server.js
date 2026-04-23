import express from "express";
import axios from "axios";
import cors from "cors";
import { profileQuery } from "./queries.js";



const app = express();

app.use(cors());
app.use(express.json());
const USERNAME = "lehoangdung29111998";
app.get("/api/leetcode-profile", async (req, res) => {
  try {


    const response = await axios.post(
      "https://leetcode.com/graphql/",
      {
        query: profileQuery,
        variables: {
          username: USERNAME,
          limit: 10,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com/",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
