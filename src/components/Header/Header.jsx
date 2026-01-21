import './style.css'
import { useEffect, useState } from 'react';

function Header() {
    const text = "Guilherme Fernando"
    const [typedText, setTypedText] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, 120)

      return () => clearTimeout(timeout)
    }
  }, [index, text])

    return(
        <header className='flex-conteiner'>
            <h1>{typedText}</h1>
            <nav>
             <a href="#profile">Home</a>
             <a href="#projetos">Projetos</a>
             <a href="#skills">Skills</a>
             <a href="#contato">Contato</a>
             <a href="/curriculoGuilherme.pdf" className="curriculo" id="curriculo" target="_blank" rel="noopener noreferrer">Currículo</a>
            </nav>            
        </header>
    )
}

export default Header;