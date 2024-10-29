const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});


let slideIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.promo-slide'); // Seleciona todos os slides

// Muda para o próximo ou anterior slide
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Vai para o último slide se estiver no primeiro
    } else if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide se estiver no último
    }
    showSlide(slideIndex);
}

// Mostra o slide com o índice fornecido
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove a classe 'active' de todos os slides
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' ao slide atual
        }
    });

    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active'); // Remove a classe 'active' de todos os indicadores
        if (i === index) {
            indicator.classList.add('active'); // Adiciona a classe 'active' ao indicador atual
        }
    });
}

// Muda o slide automaticamente a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 10000);

// Mostra o primeiro slide ao carregar
showSlide(slideIndex);



function exibirLente(lente) {
  const imagem = document.getElementById('lente-imagem');
  const texto = document.getElementById('lente-texto');

  switch (lente) {
    case 'lente1':
      imagem.src = 'imagens/Lente-multifocal.jpg';
      texto.innerText = 'Essas lentes oferecem uma transição suave entre diferentes prescrições. São ideais para pessoas que precisam de correção para múltiplas distâncias (perto, intermediária e longe), proporcionando uma visão mais natural.';
      break;
    case 'lente2':
      imagem.src = 'imagens/Design sem nome.png';
      texto.innerText = 'Projetadas para bloquear a luz azul emitida por telas digitais, essas lentes reduzem a fadiga ocular e são populares entre quem passa longas horas em frente a computadores e smartphones...';
      break;
    case 'lente3':
      imagem.src = 'imagens/lente-transition.jpg';
      texto.innerText = 'As lentes fotocromáticas mudam de cor conforme a exposição à luz UV, escurecendo ao ar livre e clareando em ambientes internos. São convenientes para quem passa muito tempo alternando entre ambientes internos e externos..';
      break;
    case 'lente4':
      imagem.src = 'imagens/antireflexo.png';
      texto.innerText = 'Lentes com antirreflexo reduzem o brilho e reflexos, oferecendo visão mais nítida e confortável. Ideais para uso em telas e na condução noturna, diminuem a fadiga ocular e dão um visual mais limpo aos óculos.';
      break;
    case 'lente5':
      imagem.src = 'imagens/lente-de-contato.jpg';
      texto.innerText = 'Lentes de contato são alternativas práticas aos óculos, oferecendo correção visual discreta e ampla visão periférica. Disponíveis para diferentes tipos de correção, como miopia, hipermetropia e astigmatismo, elas se adaptam facilmente ao estilo de vida ativo e podem ser descartáveis ou de uso prolongado..';
      break;
    default:
      imagem.src = '';
      texto.innerText = 'Selecione uma lente para ver mais detalhes.';
  }
}
// Função para alternar o menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // Alterna a classe 'active' do menu
});

// Função para fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // Verifica se o clique foi fora do menu e do botão de alternância
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active'); // Remove a classe 'active' para fechar o menu
  }
});


