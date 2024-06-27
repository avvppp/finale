document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cart');
    const purchaseForm = document.getElementById('purchase-form');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        addCartItem(item.imgSrc, item.price); 
    });

    function addCartItem(imgSrc, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="Product Image" class="cart-item-img">
            <span class="cart-item-price">${price}</span> <!-- Insert the price here -->
            <button class="remove-button">Видалити</button>
        `;

        cartContainer.appendChild(cartItem);

        cartItem.querySelector('.remove-button').addEventListener('click', () => {

            const index = cartItems.findIndex(item => item.imgSrc === imgSrc);
            if (index !== -1) {
                cartItems.splice(index, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            cartContainer.removeChild(cartItem);
        });
    }

    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (cartItems.length > 0) {
            alert('Успішно придбано!');
            localStorage.removeItem('cartItems');
            cartContainer.innerHTML = '';
            purchaseForm.reset();
        } else {
            alert('Кошик порожній.');
        }
    });
});
