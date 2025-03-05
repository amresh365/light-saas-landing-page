import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
    <header className="backdrop-blur-sm sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 ">
        <p className="text-white/60 hidden md:block">
          Sreamline your workflow and boost your productivity{" "}
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 ml-2 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saaslogo" width={70} height={40} />
            <MenuIcon className="h-7 w-7 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Feature</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-2 py-2 rounded-lg inline-flex items-center justify-center tracking-tight gap-1">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
