import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtmls";
import ProductTitle from "../../components/product-title";
import ProductBody from "../../components/product-body";
import Nav from "../../components/nav";

export default function Post({ producto, morePosts, preview }) {
  const router = useRouter();
  console.log(producto);
  if (!router.isFallback && !producto?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Nav />
      <article className="mb-32 p-4">
        <ProductTitle children={producto.title} />
        <ProductBody
          content={producto.content}
          imagen={producto.coverImage}
          title={producto.title}
          amazon={producto.enlace}
        />
      </article>
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
