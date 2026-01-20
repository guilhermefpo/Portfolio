import './style.css'

function Header() {
    return(
        <header className='flex-conteiner'>
            <h1>Guilherme Fernando</h1>
            <p>Estudante de Desenvolvimento de Software Multiplataforma</p>
            <nav>
             <a href="/curriculoGuilherme.pdf" className="curriculo" id="curriculo" target="_blank" rel="noopener noreferrer">Currículo</a>
            </nav>   
        </header>
    )
}

export default Header;