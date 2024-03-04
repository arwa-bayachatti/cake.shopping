function displayCart() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart-container'); // Assurez-vous que vous avez un conteneur avec cet ID dans votre HTML

    // Générer le HTML pour chaque article du panier
    cartContainer.innerHTML = cart.map(item => `<div>Produit ID: ${item.id}, Quantité: ${item.quantity}</div>`).join('');
}

// Appeler displayCart à la fin du chargement de la page
document.addEventListener('DOMContentLoaded', displayCart);