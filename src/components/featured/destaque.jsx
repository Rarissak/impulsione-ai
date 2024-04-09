import React from "react";
import './featured.css';
import '../../index.css';
import { Link } from "react-router-dom";

function Destaque({idBox, path, foto, nome, nicho })
{
    return(
        <div id="teste">
            <Link id={idBox} className="featuredSquare" to={path}>
                <img src={foto} alt="perfil em destaque"/> 
                <div className="data">
                    <span className="featuredName">{nome}</span>
                    <span className="featuredNiche">{nicho}</span>
                </div>
            </Link>
        </div>
        
    );
}

export default Destaque;