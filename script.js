// script.js 

// Configuração do IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: Array.from({length: 100}, (_, i) => i / 100)
};

// Função de callback
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        const scale = Math.min(1, Math.max(0.1, entry.intersectionRatio));
        target.style.transform = `scale(${scale})`;
    });
}

// Criar o observer
const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Selecionar e observar os elementos
document.querySelectorAll('.item').forEach(item => {
    observer.observe(item);
});

// Função para limpar o observer (opcional)
function cleanupObserver() {
    observer.disconnect();
}