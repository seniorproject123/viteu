import React from "react";
import { useParams } from "react-router-dom";

// Import des images
import ImgBlog1 from "../../assets/blog/blog-1.jpg";
import ImgBlog2 from "../../assets/blog/blog-2.jpg";
import ImgBlog3 from "../../assets/blog/blog-3.jpg";
import ImgBlog4 from "../../assets/blog/blog-4.jpg";

// Exemple d'articles avec leurs slugs et contenus
const articles = [
  {
    title: "Les règles de l'art du dating",
    slug: "les-regles-de-lart-du-dating",
    content:
      "Voici le contenu complet de l'article sur les règles de l'art du dating...",
    img: ImgBlog1, // Utilisation des images importées
  },
  {
    title: "Le rôle de la technologie dans les rencontres modernes",
    slug: "le-role-de-la-technologie-dans-les-rencontres-modernes",
    content:
      "Voici le contenu complet de l'article sur le rôle de la technologie...",
    img: ImgBlog2,
  },
  {
    title: "Le secret des rencontres estivales",
    slug: "le-secret-des-rencontres-estivales",
    content:
      "Voici le contenu complet de l'article sur le secret des rencontres estivales...",
    img: ImgBlog3,
  },
  {
    title: "Nos conseils d’experts pour un rendez-vous amoureux réussi",
    slug: "nos-conseils-dexperts-pour-un-rendez-vous-amoureux-reussi",
    content:
      "Voici le contenu complet de l'article sur les conseils d'experts pour un rendez-vous amoureux réussi...",
    img: ImgBlog4,
  },
];

function BlogPost() {
  const { slug } = useParams(); // Récupérer le slug de l'URL

  // Trouver l'article correspondant au slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <p>Article non trouvé</p>; // Si l'article n'existe pas, on affiche un message d'erreur
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <h1>{article.title}</h1>
      <img src={article.img} alt={article.title} />
      <p>{article.content}</p>
    </section>
  );
}

export default BlogPost;
