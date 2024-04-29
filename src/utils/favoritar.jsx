import FullHeart from '../assets/fullHeartIcon.svg';
import HeartLine from '../assets/heratLineIcon.svg';

function Favoritar() {
    // Obtém a referência da imagem
    var imagem = document.getElementById('botaoFavoritar');

    // Verifica qual é a imagem atual
    var imagemAtual = imagem.src;
    var novaImagem;

    // Verifica se a imagem atual é a imagem de HeartLine
    if (imagemAtual === window.location.origin + HeartLine) {
        novaImagem = window.location.origin + FullHeart;
    } else {
        novaImagem = window.location.origin + HeartLine;
    }

    // Atualiza o atributo src da imagem com a nova imagem
    imagem.src = novaImagem;
}

export default Favoritar;

    
    //   // Obtém a referência do elemento por classe
    //   var imagem = document.querySelector('.botaoFavoritar');
    
    //   // Verifica a classe da imagem atual
    //   var classeAtual = imagem.classList.contains('full-heart') ? 'full-heart' : 'heart-line';
    //   var novaClasse;
    
    //   // Alterna entre as classes
    //   if (classeAtual === 'full-heart') {
    //     novaClasse = 'heart-line';
    //   } else {
    //     novaClasse = 'full-heart';
    //   }
    
    //   // Atualiza a classe da imagem
    //   imagem.classList.remove(classeAtual);
    //   imagem.classList.add(novaClasse);

