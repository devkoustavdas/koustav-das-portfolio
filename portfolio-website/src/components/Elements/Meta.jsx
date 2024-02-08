import React from "react";

const Heading = ({ title, description, keyword, link }) => {
  return (
    <head>
      <link rel="canonical" href={`https://koustavdas.vercel.com/${link}`} />
      <meta name="description" content={description} />
      <meta name="author" content="Koustav Das" />
      <meta name="keywords" content={keyword} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={`https://koustavdas.vercel.com/${link}`}
      />
    </head>
  );
};

export default Heading;
