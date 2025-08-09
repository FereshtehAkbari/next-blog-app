import NavLink from "./NavLink";
const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  { id: 2, children: "بلاگ ها", path: "/blogs" },
];
function Header() {
  const user = false;
  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-[var(--color-secondary-900)]`}
    >
      <nav className="container xl:max-w-screen-xl px-[1rem]">
        <ul className=" flex items-center text-[var(--color-secondary-400)] justify-between py-2">
          <div className="flex items-center gap-x-10">
            {navLinks.map((navLinks) => {
              return (
                <li key={navLinks.id}>
                  <NavLink path={navLinks.path}>{navLinks.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
