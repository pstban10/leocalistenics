import React from "react";
import '../styles/Contenido.css'

function Contenido(props) {
    return (
        <div className="contenido">
            <h2>¿Qué rayos haces, chabón?</h2>
            <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/KDTo8skH4eU"
                title="Video de YouTube"
                allowFullScreen
            ></iframe>


        </div>
    )
}
Contenido()
export default Contenido;