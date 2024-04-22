import React from 'react';

import '../perfilParceiro/perfilParceiro.css'


function ImagePreview({ src, id }) {
  return (
    <div className="imagemPicture">
      {src && <img id={id} src={src} alt="Imagem selecionada" />}
    </div>
  );
}

export default ImagePreview;