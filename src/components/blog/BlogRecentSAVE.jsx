import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BlogRecent = ({ article, scrollToTop }) => {
  return (
    <article key={article.slug} className="max-w-xs">
      <Link onClick={scrollToTop} to={`/articles/${article.slug}`}>
        <img
          src={article.img}
          className="mb-5 rounded-lg"
          alt={article.title}
        />
      </Link>
      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <Link onClick={scrollToTop} to={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      </h2>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {article.description}
      </p>
      <Link
        onClick={scrollToTop}
        to={`/articles/${article.slug}`}
        className="inline-flex items-center font-medium text-[#2563eb] underline underline-offset-4 hover:no-underline dark:text-[#3b82f6]"
      >
        Lire en 2 minutes
      </Link>
      <p className="mb-4 text-gray-500 dark:text-gray-400">
        {article.description}
      </p>
      <Link
        onClick={scrollToTop}
        to={`/articles/${article.slug}`}
        className="inline-flex items-center font-medium text-[#2563eb] underline underline-offset-4 hover:no-underline dark:text-[#3b82f6]"
      >
        Lire en 1 minute
      </Link>
    </article>
  );
};

export default BlogRecent;
