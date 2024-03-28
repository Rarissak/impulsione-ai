import React from "react";
import './featured.css';
import '../../index.css';

function TituloBorda({title})
{
    return(
        <div id="titleBorda">  
            <h2 id="featuredTitle" className="title">{title}</h2>
        </div>

    );
}

export default TituloBorda;