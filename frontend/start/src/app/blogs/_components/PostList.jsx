import CoverImage from "./CoverImage";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import Author from "./Author";
import PostInteraction from "./PostInteraction";

async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="col-span-12  sm:col-span-6 lg:col-span-4 border border-[var(--color-secondary-400)] p-2 rounded-lg "
        >
          <CoverImage {...post} />
          {/* {post content} */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 text-[var(--color-secondary-300)]">
                {post.title}
              </h2>
            </Link>
            <p>{post.author?.name}</p>
            <p>{post.readingTime}</p>
          </div>
          {/* post author */}
          <div className="flex items-center justify-between mb-4">
            <Author {...post.author} />
            <div className="flex items-center text-[10px] text-[var(--color-secondary-500)]">
              <ClockIcon className="w-4 h-4 stroke-[var(--color-secondary-500)]" />
              <span className="ml-1">خواندن:</span>
              <span className="ml-1 leading-3">{post.readingTime}</span>
              <span>دقیقه</span>
            </div>
          </div>
          <PostInteraction post={post} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
