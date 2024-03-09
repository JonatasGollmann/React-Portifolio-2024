import "./header.css";

export default function Header({ Icone,scrollTo }: { Icone: string, scrollTo: any }) {
  return (
    <header className="headerContainer">
      <img src={Icone} alt="" className="iconHeader" />
      <nav className="menuHeader">
        <button onClick={ () => {scrollTo('#sobre')}} className="menuItem">Sobre</button>
        <button onClick={ () => {scrollTo('#projetos')}} className="menuItem">Projetos</button>
        <button onClick={ () => {scrollTo('#contato')}} className="menuItem">Contato</button>
      </nav>
    </header>
  );
}
