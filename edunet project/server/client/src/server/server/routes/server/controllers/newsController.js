const axios = require("axios");

const fetchNews = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.json(data.articles); // Send news articles to client
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

module.exports = { fetchNews };
