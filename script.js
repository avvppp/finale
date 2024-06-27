document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.button');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const imgSrc = card.querySelector('.card-img').src;
            const price = card.querySelector('.price').textContent;

            const existingItem = cartItems.find(item => item.imgSrc === imgSrc);

            if (!existingItem) {
                cartItems.push({ imgSrc: imgSrc, price: price });
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                alert('Товар додано до кошика.');
            } else {
                alert('Цей товар вже у кошику.');
            }
        });
    });
});
