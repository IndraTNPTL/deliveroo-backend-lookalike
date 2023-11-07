require("dotenv").config();
const axios = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP",
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  return res.json({ data: response.data, message: "Here is your data" });
});

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
