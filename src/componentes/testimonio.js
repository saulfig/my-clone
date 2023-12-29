import React from "react";

export function Testimonio (props) {
    return (
    <div className="contenedor-principal">
        <img className="contenedor-imagenes" src={require(`../imagnes/${props.imagen}.jpg`)} alt="foto gian" />
            <div className="testimonio-contenido">
                <p className="nombre">{props.nombre} {props.pais}</p>
                <p className="puesto">{props.puesto} <strong> {props.cargo}</strong></p>
                <p className="texto">{props.texto} </p>
            </div>
    </div>

    
    
    )

}

