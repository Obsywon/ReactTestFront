import React, { memo } from "react";
import "../styles/Components/Article.css";


const Article = memo(({ title, imageUrl, altInfo, text, date }) => {
  return (
    <div className="articleContainer">
        {title && <h2>{title}</h2>}
        {date && <p className="date">{date}</p>}
      {imageUrl && altInfo && (
        <div className="imageContainer">
          <img src={imageUrl} alt={altInfo} crossOrigin="use-credentials" />
        </div>
      )}
      <p>{text}</p>
    </div>
  );
});

export default Article;
