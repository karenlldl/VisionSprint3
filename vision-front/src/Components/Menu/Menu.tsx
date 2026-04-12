import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
  path?: string;
  onClick?: () => void;
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
        w-55 min-h-screen
        bg-[#BABF34] pt-8 text-white
        ${menuAberto ? "block" : "hidden"}
        md:block
      `}
    >
      <div className="flex flex-col items-center">
        {/* logo */}
        <img
          src="/img/logo_vision.png"
          alt="Logo Vision"
          className="mb-6 w-27.5"
        />

        <nav className="w-full">
          <ul className="flex flex-col items-center">
            {menuItems.map((item, index) => {
              const ativo = location.pathname === item.path;

              return (
                <li key={index} className="my-2 w-full px-4">
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="block w-full rounded-lg px-5 py-3 text-center font-bold hover:bg-[#d5da5b]"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.path || "/"}
                      className={`block w-full rounded-lg px-5 py-3 text-center font-bold transition ${
                        ativo
                          ? "border-l-4 border-white bg-[#d5da5b] shadow"
                          : "hover:bg-[#d5da5b]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
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