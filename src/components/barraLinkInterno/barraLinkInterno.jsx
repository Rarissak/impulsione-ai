import '../barraLinkExterno/barraLink.css'

//Para movimentações na mesma página
function BarraLinkInterno({ id, name, idElemento }) {

  //Pega o id do bloco e rola até lá
  const scrollToTopic = () => {
    const element = document.getElementById(idElemento);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button className='itemBarraRoxo' id={id} onClick={scrollToTopic}>
      {name}
    </button>
  );
};

export default BarraLinkInterno;