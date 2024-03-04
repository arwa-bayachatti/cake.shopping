document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        console.log(`Produit ${productId} ajouté au panier`);
        // Ici, ajoutez le code pour réellement ajouter le produit au panier.
      });
    });
  });
  