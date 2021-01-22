import React, { useState } from 'react'

function MostraGif () {

    const [meuGif, alteraGif] = useState(false)

    const gifAparece = () => {
        alteraGif(true)
    }

    const gifSome = () => {
        alteraGif(false)
    }

    return (
        <>
            <button onClick={gifAparece}>Clique aqui</button> <br></br>

            {meuGif && <img onClick={gifSome} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif"/>}
        </>
    );
}

export default MostraGif;