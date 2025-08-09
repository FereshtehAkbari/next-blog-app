import Link from "next/link";

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-color[var(--secondary-300) mb-8">
            هیچ پستی با این مشخصات یافت نشد!
          </h1>
          <Link href="/blogs" className="hover-red-500">
            رفتن به صفحه پست ها؟
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
