import "tailwindcss/tailwind.css";
import { getAllPosts } from "../lib/api";
import Layout from "../components/layout";

export default function Home(allPosts) {
  const heroPost = allPosts.allPosts[0];
  return (
    <>
      <Layout destacados={allPosts.allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "enlace",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
