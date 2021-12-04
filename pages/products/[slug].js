import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtmls";

export default function Post({ producto, morePosts, preview }) {
  const router = useRouter();
  console.log(producto);
  if (!router.isFallback && !producto?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <h2>{producto.title}</h2>
    </>
  );
}

export async function getStaticProps({ params }) {
  const producto = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(producto.content || "");

  return {
    props: {
      producto: {
        ...producto,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const producto = getAllPosts(["slug"]);

  return {
    paths: producto.map((producto) => {
      return {
        params: {
          slug: producto.slug,
        },
      };
    }),
    fallback: false,
  };
}
