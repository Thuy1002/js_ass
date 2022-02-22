let cart = [];
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if(!existProduct){
        cart.push(newProduct)
    }  else {
       existProduct.quantity += +newProduct.quantity
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
export const increaseQuantity = (id, next) => {
    cart.find(item => item.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}
export const decreaseQuantity = id => {
    const currentProduct = cart.find(item => item.id === id);
    currentProduct.quantity--;
    if(currentProduct.quantity < 1){
        const confirm = window.confirm("Ban co muon xoa hay khong?");
        if(confirm){
            cart = cart.filter(item => item.id != id);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Ban co muon xoa hay khong?");
    if(confirm){
        cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}