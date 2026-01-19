import './style.css'

function Skills({ devicon, skill }) {
  return (
    <div className="habilidade">
      <i className={devicon} style={{ fontSize: "40px" }}></i>
      <p>{skill}</p>
    </div>
  );
}

export default Skills;

