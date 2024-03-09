import { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = () => {
    navigator.clipboard.writeText('jonatasgollmann@gmail.com')
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false)
    }, 2000);
  }

  return (
    <div className="footerContainer" id="#contato">
      <div className="contact">
        <h2 className="workTogether">Vamos trabalhar juntos?</h2>
        <div className="social">
          <button className="btnEmail" onClick={copiarTexto}>Email <span>{copiado ? 'Copiado!' : 'Copiar'}</span></button>
          <a
            className="linkedIn"
            href="https://www.linkedin.com/in/jonatas-gollmann/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="gitHub"
            href="https://github.com/JonatasGollmann"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <h2 className="copyright">Jonatas Gollmann &copy; 2024</h2>
    </div>
  );
}
