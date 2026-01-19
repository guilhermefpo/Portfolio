import './style.css'

function Header() {
    return(
        <header>
            <h1>Guilherme Fernando</h1>
            <p>Estudante de Desenvolvimento de Software Multiplataforma</p>
            <a href="/curriculoGuilherme.pdf" className="curriculo" id="curriculo" target="_blank" rel="noopener noreferrer">Currículo</a>
        </header>
    )
}

export default Header;