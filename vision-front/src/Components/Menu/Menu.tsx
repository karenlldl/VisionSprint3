import { Link, useLocation } from "react-router-dom";

type MenuItem = {
  label: string;
<<<<<<< HEAD
  path?: string;
  onClick?: () => void;
=======
  path: string;
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
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
<<<<<<< HEAD
        w-55 min-h-screen
        bg-[#BABF34] pt-8 text-white
        ${menuAberto ? "block" : "hidden"}
        md:block
      `}
    >
      <div className="flex flex-col items-center">
        {/* logo do menu */}
        <img
          src="/img/logo_vision.png"
          alt="Logo Vision"
          className="mb-6 w-27.5"
=======
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
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
        />

        <nav className="w-full">
          <ul className="flex flex-col items-center">
<<<<<<< HEAD
            {menuItems.map((item, index) => (
              <li key={index} className="my-2">
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="block w-35 rounded-lg px-5 py-2.5 text-center font-bold hover:bg-[#d5da5b]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path || "/"}
                    className={`block w-35 rounded-lg px-5 py-2.5 text-center font-bold ${
                      location.pathname === item.path
                        ? "bg-[#d5da5b]"
                        : "hover:bg-[#d5da5b]"
=======
            {menuItems.map((item) => {
              const ativo = location.pathname === item.path;

              return (
                <li key={item.path} className="my-2">
                  <Link
                    to={item.path}
                    className={`rounded-lg px-5 py-2.5 font-bold text-white transition duration-300 ${
                      ativo ? "bg-[#d5da5b]" : "hover:bg-[#d5da5b]"
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
                    }`}
                  >
                    {item.label}
                  </Link>
<<<<<<< HEAD
                )}
              </li>
            ))}
=======
                </li>
              );
            })}
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
          </ul>
        </nav>
      </div>
    </aside>
  );
};

<<<<<<< HEAD
export default Menu;
=======
export default Menu;
>>>>>>> bf2cf2187c0625cced01a4438b3a3efd3afbe069
