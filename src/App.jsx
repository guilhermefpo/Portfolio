import './App.css'
import 'devicon/devicon.min.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import skills from './components/Skills/Skills'
import ProjetoCard from './components/ProjetoCard/ProjetoCard'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'

function App() { 
  const projetos = [
  {
    titulo: "Projeto API",
    descricao: "Super projeto API em grupo. ",
    imagem: "./imagensProjetos/Api.jpeg",
    url: "https://github.com/guilhermefpo/CodeWave"
  },
  {
    titulo: "Audiobook",
    descricao: "Meu primeiro projeto em React.js.",
    imagem: "./imagensProjetos/Audiobook.png",
    url: "https://audiobook-inky-zeta.vercel.app/"
  },
  {
    titulo: "Site Universidade UNES",
    descricao: "Primeiro projetinho na Faculdade, para prática de HTML e CSS.",
    imagem: "./imagensProjetos/unesuniversidade.png",
    url: "https://site-universidade-two.vercel.app/"
  },
  {
    titulo: "Site Volêi",
    descricao: "Site desenvolvido com bootstrap, ideal para projetos mais simples.",
    imagem: "./imagensProjetos/sitevolei.png",
    url: "https://volei-rho.vercel.app/"
  }
];

const skills = [
  {
    devicon: "devicon-html5-plain colored fs-1",
    skill: "HTML5"
  },
  {
    devicon: "devicon-css3-plain colored fs-1",
    skill: "CSS3"
  },
  {
    devicon: "devicon-javascript-plain colored fs-1",
    skill: "JavaScript"
  },
  {
    devicon: "devicon-react-original colored fs-1",
    skill: "React"
  },
  {
    devicon: "devicon-mysql-plain colored",
    skill: "MySql"
  }
] 

  return (
    <>
      <Header />
      <Profile />
      
      <main className='conteudo'>
      <section className='skills' id='skills'>
        <h2>Skills</h2>
        <div className='skill-lista'>
           {skills.map((skill, index) => (
          <Skills
            key={index}
            devicon={skill.devicon}
            skill={skill.skill}
           />
           ))}
        </div>
        </section>

        <section className="projetos" id='projetos'>
      <h2>Projetos</h2>

      <div className="projetos-lista">
        {projetos.map((projeto, index) => (
          <ProjetoCard
            key={index}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            imagem={projeto.imagem}
            url={projeto.url}
          />
        ))}
      </div>
    </section>  

   <section id='contato' className='section'>
        <Footer />
   </section>  
      </main>
    </>
  )
}

export default App
