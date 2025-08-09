import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return {
    title: `${post.title}`,
  };
}

async function SinglePage({ params }) {
  const post = await getPostBySlug(params.postSlug);

  if (!post) notFound();
  return (
    <div className="text-[var(--color-secondary-300)] max-w-screen-md mx-auto">
      <h1 className="text-[var(--color-secondary-200)] text-2xl font-bold mb-8 ">
        {post.title}
      </h1>
      <p className="mb-4">{post.breifText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
        />
      </div>
      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} /> */}
    </div>
  );
}

export default SinglePage;
