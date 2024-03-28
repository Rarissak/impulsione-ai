import React from "react";
import "./buttons.css";

import { Link } from "react-router-dom";

function ButtonsPartnerUser({idParceiro, idUsuario})
{
    return(
        // centralizando e botando fundo
        <div id="buttonCentralize">

            {/* Uso do Link para linkar as páginas */}
            <Link
            to='/cadastroParceiro'>
                <button className="buttons title" id={idParceiro}>PARCEIRO</button>
            </Link>
            <Link
            to='/cadastroUsuario'>
                <button className="buttons title" id={idUsuario}>USUÁRIO</button>
            </Link>
        </div>
    );
}

export default ButtonsPartnerUser;