export default function Header() {
  return (
    <header className="flex justify-between items-center px-24 pt-2 h-16 z-50 shadow-sm bg-white-3 max-md:justify-center">
      
      <img src="/icon.svg" alt="Logotipo Jonatas Gollmann" className="h-10"/>
      <nav className=" flex w-[300px] items-center justify-end *:rounded-md *:flex *:justify-center *:items-center *:h-10 *:w-[100px] gap-4 text-black-1 font-medium *:transition-all *:duration-300 max-md:hidden">
        <a href="#about" className="hover:bg-green-1 hover:text-white-2">Sobre</a>
        <a href="#projects" className="hover:bg-green-1 hover:text-white-2">Projetos</a>
        <a href="#contact" className="hover:bg-green-1 hover:text-white-2">Contato</a>
      </nav>
    </header>
  );
}
