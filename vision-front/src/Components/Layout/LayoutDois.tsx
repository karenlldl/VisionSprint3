import { useState, type ReactNode } from "react";
import Menu from "../Menu/Menu";
import NavDois from "../NavDois/NavDois";

type MenuItem = {
  label: string;
  path: string;
};

type LayoutDoisProps = {
  nome: string;
  mostrarDr?: boolean;
  menuItems: MenuItem[];
  children: ReactNode;
};

const LayoutDois = ({
  nome,
  mostrarDr = false,
  menuItems,
  children,
}: LayoutDoisProps) => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9e8] font-[Poppins]">
      <NavDois
        nome={nome}
        mostrarDr={mostrarDr}
        onMenuClick={() => setMenuAberto(!menuAberto)}
      />

      <div className="flex">
        <Menu menuItems={menuItems} menuAberto={menuAberto} />

        <main className="w-full p-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutDois;