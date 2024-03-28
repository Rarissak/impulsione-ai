import React from "react";
import CopiarArquivo from '../assets/copiarArquivoIcon.svg'

function CopiarTexto({ texto }) {
    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert('Texto copiado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao copiar texto:', error);
            });
    };

    return (
        <button onClick={copyTextToClipboard}>
            <img src={CopiarArquivo} alt='icon para copiar o texto'
                style={{
                    width: '1.25rem', // Largura da linha horizontal
                    background: 'none',
                    cursor: 'pointer',
                }}
            />
        </button>
    )
}

export default CopiarTexto;