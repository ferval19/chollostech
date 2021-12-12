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
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full">
          <Nav />
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <article className="mb-32 p-4">
              <ProductTitle
                title={producto.title}
                imagen={producto.coverImage}
                enlace={producto.enlace}
              />
              <ProductBody content={producto.content} />
            </article>
          </main>
        </div>
      </div>
    </div>
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
    "enlace",
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
