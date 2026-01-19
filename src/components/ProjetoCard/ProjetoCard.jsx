import './style.css'

  function ProjetoCard({ titulo, descricao, imagem, url }) {
  return (
    <div className="projeto-card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={url} target='_blank' rel="noopener noreferrer">Ver Projeto</a>
    </div>
  );
}

  

export default ProjetoCard
