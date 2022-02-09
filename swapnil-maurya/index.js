let menu_items = document.querySelector('.menu-items');

menu_items.addEventListener('click', (e) => {
    const target = e.target.closest('.menu-item');
    if(!target.classList.contains('menu-item')) return;

    let rect = document.querySelector(`.section${target.dataset.n}`).getBoundingClientRect();
    window.scrollTo({ top: rect.top, behavior: 'smooth' });
})