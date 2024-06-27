document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cart');
    const purchaseForm = document.getElementById('purchase-form');
    const cartItems = new Set(JSON.parse(localStorage.getItem('cartItems')) || []);

    cartItems.forEach(imgSrc => {
        addCartItem(imgSrc);
    });

    function addCartItem(imgSrc) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="Product Image" class="cart-item-img">
            <span class="cart-item-price">100 грн</span>
            <button class="remove-button">Видалити</button>
        `;

        cartContainer.appendChild(cartItem);

        cartItem.querySelector('.remove-button').addEventListener('click', () => {
            cartItems.delete(imgSrc);
            localStorage.setItem('cartItems', JSON.stringify(Array.from(cartItems)));
            cartContainer.removeChild(cartItem);
        });
    }

    purchaseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (cartItems.size > 0) {
            alert('Успішно придбано!');
            cartItems.clear();
            localStorage.removeItem('cartItems');
            cartContainer.innerHTML = '';
            purchaseForm.reset();
        } else {
            alert('Кошик порожній.');
        }
    });
});
