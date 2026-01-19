import './style.css'

function Footer() {
  return (
    <footer>
      <h2>Contato</h2>

      <p>
        <i className="fa-solid fa-envelope"></i>
        {' '}
        gfernandoportelaoliveira@gmail.com
      </p>

      <div className="social-links mt-2">
        <a
          href="https://github.com/guilhermefpo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/guilherme-fernando-portela-de-oliveira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/gui_fernando12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
