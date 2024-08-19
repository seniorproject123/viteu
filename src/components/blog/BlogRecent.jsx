import React from "react";
import { Link } from "react-router-dom";
import ImgBlog1 from "../../assets/blog/blog-1.jpg";
import ImgBlog2 from "../../assets/blog/blog-2.jpg";
import ImgBlog3 from "../../assets/blog/blog-3.jpg";

function BlogRecent() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <aside
      aria-label="Related articles"
      className="bg-gray-50 py-8 lg:py-24 dark:bg-gray-800"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Articles recents
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <Link onClick={scrollToTop} to="/blog">
            <article className="max-w-xs">
              <a href="">
                <img src={ImgBlog1} className="mb-5 rounded-lg" alt="Image 1" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="">Les règles de l'art du dating</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                "Pour votre première escapade romantique, osez sortir des
                sentiers battus !"
              </p>
              <a
                href=""
                className="inline-flex items-center font-medium text-[#2563eb] underline underline-offset-4 hover:no-underline dark:text-[#3b82f6]"
              >
                Lire en 2 minutes
              </a>
            </article>
          </Link>
          <Link onClick={scrollToTop} to="/blog2">
            <article className="max-w-xs">
              <a href="">
                <img src={ImgBlog2} className="mb-5 rounded-lg" alt="Image 2" />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="">
                  Le rôle de la technologie dans les rencontres modernes
                </a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                "Chaque profil, méticuleusement renseigné, devient ainsi une
                porte ouverte vers de nouvelles possibilités, augmentant vos
                chances de rencontrer l'âme sœur."
              </p>
              <a
                href=""
                className="inline-flex items-center font-medium text-[#2563eb] underline underline-offset-4 hover:no-underline dark:text-[#3b82f6]"
              >
                Lire en 2 minutes
              </a>
            </article>
          </Link>
          <Link onClick={scrollToTop} to="/blog3">
            <article className="max-w-xs">
              <img
                src={ImgBlog3}
                className="mb-5 rounded-lg"
                alt="Image 3"
                width="100%"
                height="100px"
                style={{ objectFit: "cover" }}
              />
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="">Le secret des rencontres estivales</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                "Une personne épanouie et confiante attire naturellement les
                autres."
              </p>
              <a
                href=""
                className="inline-flex items-center font-medium text-[#2563eb] underline underline-offset-4 hover:no-underline dark:text-[#3b82f6]"
              >
                Lire en 1 minute
              </a>
            </article>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default BlogRecent;
