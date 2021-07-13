import React from 'react'

interface PerfilDesarrollador {
    nombre: string
    edad: number,
    tienePantalla: boolean
}

const PerfilDesarrollador = {
    nombre: 'Marco',
    edad: 36,
    tienePantalla: 'Tiene pantalla',
}

export default function (){
   

return(

<form className="form-horizontal" role="form">
    <div className="col-2">        
            <div className="col-lg-10">
            <label form="nombre" className="center">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre"></input>
            </div>
            <br/>
            <br/>
            <div className="col-lg-10">
            <label form="edad" className="center">Edad</label>
            <input type="int" className="form-control" id="edad" placeholder="Edad"></input>
            </div>
            <br/>
            <br/>
            <div className="col-lg-10">
            <label form="pantalla" className="center">Tiene pantalla?</label>
            <input type="txt" className="form-control" id="pantalla" placeholder="Tiene pantalla?"></input>  
            <br/>
            <br/>          
            <button type="reset" className="btn btn-primary">Cambiar información</button>
            </div>
            
    </div>   
</form>
    
)
}
