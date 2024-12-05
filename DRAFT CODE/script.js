const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(item => {
            if (item !== card) {
                item.classList.remove('expanded');
            }
        });
        card.classList.toggle('expanded');
    });
});