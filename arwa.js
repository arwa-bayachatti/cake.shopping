// Fonction pour récupérer le panier depuis localStorage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Fonction pour sauvegarder le panier dans localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const cart = getCart();
    const productIndex = cart.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1; // Augmenter la quantité si le produit existe déjà
    } else {
        cart.push({ id: productId, quantity: 1 }); // Ajouter un nouveau produit au panier
    }

    saveCart(cart);
}

// Attacher l'événement de clic à tous les boutons "Ajouter au panier"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-btn-cheese');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
            alert(`Produit ${productId} ajouté au panier`);
        });
    });
});
/***document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-btn-cheese');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
      });
    });
  });
  
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[productId] = cart[productId] ? cart[productId] + 1 : 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Produit ${productId} ajouté au panier.`);
  }

  document.addEventListener('DOMContentLoaded', () => {
    displayCart();
  });
  
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartContainer = document.getElementById('cart-items');
  
    if (Object.keys(cart).length === 0) {
      cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
      return;
    }
  
    cartContainer.innerHTML = Object.keys(cart).map(productId => {
      return `
        <div class="cart-item">
          Produit ID: ${productId}, Quantité: ${cart[productId]}
          <button onclick="removeFromCart('${productId}')">Retirer</button>
        </div>
      `;
    }).join('');
  }
  
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productId]) {
      cart[productId]--;
      if (cart[productId] <= 0) {
        delete cart[productId];
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }
  }***/


/*var panier= []
function ajouteropanier(article){
    panier.push(article)
    console.log(panier)
}
document.querySelectorAll('add-btn-cheese').forEach(button=>{
    button.addEventListener('click',function(){
        var articlee=this.closest('.img-grp')
        var articleee= {
            id:articlee.getAttribute('data-id')
            nom:articlee.getAttribute('data-nom')
            prix:articlee.getAttribute('data-prix')
        }
        ajouteropanier(article)
    })
    
})*/

/*var button = document.getElementsByClassName('add-btn-cheese')
var x = document.getElementById('btn')
function add(){
   button.value.classlist*/

/*document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.add-btn-cheese');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        console.log(`Produit ${productId} ajouté au panier`);
        // Ici, ajoutez le code pour réellement ajouter le produit au panier.
      });
    });
  });*/
  