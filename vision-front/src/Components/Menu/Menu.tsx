import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
  path: string;
};

type MenuProps = {
  menuItems: MenuItem[];
  menuAberto?: boolean;
};

const Menu = ({ menuItems, menuAberto = false }: MenuProps) => {
  const location = useLocation();

  return (
    <aside
      className={`
        fixed left-0 top-20 z-50 h-[calc(100vh-80px)] w-55
        bg-[#BABF34] pt-7.5 text-white transition-transform duration-300
        ${menuAberto ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="flex flex-col items-center">
        <img
          src="/img/logo_vision.png"
          alt="Logo Vision"
          className="mb-5 w-27.5"
        />

        <nav className="w-full">
          <ul className="flex flex-col items-center">
            {menuItems.map((item) => {
              const ativo = location.pathname === item.path;

              return (
                <li key={item.path} className="my-2">
                  <Link
                    to={item.path}
                    className={`rounded-lg px-5 py-2.5 font-bold text-white transition duration-300 ${
                      ativo ? "bg-[#d5da5b]" : "hover:bg-[#d5da5b]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Menu;