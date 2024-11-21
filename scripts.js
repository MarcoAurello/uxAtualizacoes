// Função para permitir arrastar o conteúdo das colunas verticais
const verticalScrollContainer = document.getElementById('verticalScrollContainer');

let isVerticalDragging = false;
let startXVertical;
let scrollLeftVertical;

// Inicia o arrasto
verticalScrollContainer.addEventListener('mousedown', (e) => {
  isVerticalDragging = true;
  verticalScrollContainer.classList.add('active'); // Altera o cursor
  startXVertical = e.pageX - verticalScrollContainer.offsetLeft;
  scrollLeftVertical = verticalScrollContainer.scrollLeft;
});

// Fim do arrasto
verticalScrollContainer.addEventListener('mouseleave', () => {
  isVerticalDragging = false;
  verticalScrollContainer.classList.remove('active');
});

verticalScrollContainer.addEventListener('mouseup', () => {
  isVerticalDragging = false;
  verticalScrollContainer.classList.remove('active');
});

// Move os stories ao arrastar horizontalmente
verticalScrollContainer.addEventListener('mousemove', (e) => {
  if (!isVerticalDragging) return;
  e.preventDefault();
  const x = e.pageX - verticalScrollContainer.offsetLeft;
  const walk = (x - startXVertical) * 2; // Velocidade do scroll horizontal
  verticalScrollContainer.scrollLeft = scrollLeftVertical - walk;
});

// Adiciona suporte ao toque (mobile)
verticalScrollContainer.addEventListener('touchstart', (e) => {
  isVerticalDragging = true;
  startXVertical = e.touches[0].pageX - verticalScrollContainer.offsetLeft;
  scrollLeftVertical = verticalScrollContainer.scrollLeft;
});

verticalScrollContainer.addEventListener('touchend', () => {
  isVerticalDragging = false;
});

verticalScrollContainer.addEventListener('touchmove', (e) => {
  if (!isVerticalDragging) return;
  const x = e.touches[0].pageX - verticalScrollContainer.offsetLeft;
  const walk = (x - startXVertical) * 2; // Velocidade do scroll horizontal
  verticalScrollContainer.scrollLeft = scrollLeftVertical - walk;
});
