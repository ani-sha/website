import { Home, LibraryBig } from "lucide-react";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";

const navItems = [
  {
    path: `/`,
    label: `Home`,
    icon: <Home size={20} />,
  },
  {
    path: `/blog`,
    label: `Blog`,
    icon: <LibraryBig size={20} />,
  },
];

export const Navbar = () => {
  const leftNavItems = navItems.slice(0, 1);
  const rightNavItems = navItems.slice(1);

  return (
    <nav>
      <div className="flex items-center justify-between">
        <ul className="list-none">
          {leftNavItems.map(({ path, icon }) => {
            return <Navlink path={path} icon={icon} key={path} />;
          })}
        </ul>
        <div className="flex items-center gap-2">
          <ul className="list-none">
            {rightNavItems.map(({ path, label, icon }) => {
              return <Navlink path={path} icon={icon} key={path} />;
            })}
          </ul>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

const Navlink = ({ path, icon }: { path: string; icon: React.ReactNode }) => {
  return (
    <li className={path}>
      <Link href={path}>{icon}</Link>
    </li>
  );
};
