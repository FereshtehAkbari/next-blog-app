import CategoryList from "../_components/CategoryList";
// import BlogPage from "./page";

export const metadata = { title: "بلاگ ها" };
function Layout({ children }) {
  return (
    <div>
      <h1 className="text-lg mb-12 font-bold text-[]">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-[var(--color-secondary-500)] space-y-4">
          <CategoryList />
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* <BlogPage /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
