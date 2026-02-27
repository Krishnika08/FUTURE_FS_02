function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}