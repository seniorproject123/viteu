import React from "react";
import { Link } from "react-router-dom";
import ImgBlog1 from "../../assets/blog/blog-1.jpg";
import ImgBlog2 from "../../assets/blog/blog-2.jpg";


function BlogRecent() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Articles recents</h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                <Link onClick={scrollToTop} to="/blog">
                  <article className="max-w-xs">
                      <a href="">
                          <img src={ImgBlog1} className="mb-5 rounded-lg" alt="Image 1"/>
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                          <a href="">Les règles de l'art du dating</a>
                      </h2>
                      <p className="mb-4 text-gray-500 dark:text-gray-400">Pour votre première escapade romantique, osez sortir des sentiers battus !</p>
                      <a href="" className="inline-flex items-center font-medium underline underline-offset-4 text-[#2563eb] dark:text-[#3b82f6] hover:no-underline">
                          Lire en 2 minutes
                      </a>
                  </article>
                </Link>
                <Link   onClick={scrollToTop} to="/blog2">
                  <article className="max-w-xs">
                      <a href="">
                          <img src={ImgBlog2} className="mb-5 rounded-lg" alt="Image 2"/>
                      </a>
                      <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                          <a href="">Le rôle de la technologie dans les rencontres modernes</a>
                      </h2>
                      <p className="mb-4  text-gray-500 dark:text-gray-400">Chaque profil, méticuleusement renseigné, devient ainsi une porte ouverte vers de nouvelles possibilités, augmentant vos chances de rencontrer l'âme sœur</p>
                      <a href="" className="inline-flex items-center font-medium underline underline-offset-4 text-[#2563eb] dark:text-[#3b82f6] hover:no-underline">
                          Lire en 2 minutes
                      </a>
                  </article>
                </Link>
            </div>
        </div>
      </aside>
    );
}

export default BlogRecent;
