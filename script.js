// --- EFEITO DE DIGITAÇÃO ---
new Typed('#typed-text', {
    strings: ['Com Muito Amor, Do Seu Joãozinho.','Eu atravessaria a quinta dimenssão com a força do amor que sinto por você. (Interestellar)',  'Eu construí nosso universo particular.', 'Uma viagem pelas nossas memórias.', 'Role para baixo para começar.'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    cursorChar: '_',
});

// --- ANIMAÇÃO AO ROLAR A PÁGINA ---
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
});

document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    scrollObserver.observe(el);
});

// --- FUNCIONALIDADE DO MODAL DA GALERIA ---
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');

function openModal(element) {
    const img = element.querySelector('img');
    modalImg.src = img.src;
    modalCaption.textContent = img.dataset.caption || ''; // Usa a legenda do atributo 'data-caption'
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.remove('scale-95');
    document.body.style.overflow = 'hidden'; // Impede rolar a página com o modal aberto
}

function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.add('scale-95');
    document.body.style.overflow = 'auto';
}

// Fechar o modal com a tecla 'Escape'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});
