import './style.css'; 
import { useState, useEffect } from 'react';

function Profile() {
   const text = "Desenvolvedor de Software Multiplataforma"
   const [textPerfil, setTextPerfil] = useState("")
   const [index, setIndex] = useState(0)

   useEffect(() => {
     if (index < text.length) {
       const timeout = setTimeout(() => {
       setTextPerfil((prev) => prev + text.charAt(index))
       setIndex(index + 1)
     }, 120)

    return () => clearTimeout(timeout)
  }
}, [index, text])

    return(
        <section>
            <div className='perfil' id='profile'>
                <img src="/FotoGui/foto_guilherme.jpg" alt="Guilherme" />
                <div className='perfil-texto'>
                <h2>{textPerfil}</h2>
                <p>Buscando unir lógica e design para criar experiências digitais únicas.</p>
                </div>
            </div>
        </section>
    )
}

export default Profile;


