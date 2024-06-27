document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.button');
    const cartItems = new Set(JSON.parse(localStorage.getItem('cartItems')) || []);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const imgSrc = card.querySelector('.card-img').src;
            const price = card.querySelector('.price').textContent;

            if (!cartItems.has(imgSrc)) {
                cartItems.add(imgSrc);
                localStorage.setItem('cartItems', JSON.stringify(Array.from(cartItems)));
                alert('Товар додано до кошика.');
            } else {
                alert('Цей товар вже у кошику.');
            }
        });
    });
});
