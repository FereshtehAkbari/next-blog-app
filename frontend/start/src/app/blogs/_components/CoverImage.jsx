import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, slug, coverImageUrl }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          quality={90}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
