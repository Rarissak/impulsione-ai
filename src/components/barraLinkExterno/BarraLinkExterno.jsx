import React from 'react';
import "../barraLinkExterno/barraLink.css";
import "../../index.css";
import {Link} from "react-router-dom";

//Para movimentações para outras páginas
function BarraLinkExterno({id, name, link}) {
  return (
      <>
        <Link
        to={link}>
          <button className='itemBarra' id={id}>{name}</button>
        </Link>
      </>
    );
}

export default BarraLinkExterno;