import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR-API-KEY"
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};
export default NewsList;
