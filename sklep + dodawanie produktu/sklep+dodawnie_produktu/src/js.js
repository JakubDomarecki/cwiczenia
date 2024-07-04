const shopModule = ( function() {
    const _products = [];

    const _countNewPrice = (price) =>{
        return price + (price * 0.5) - 0.1;
    }

    const addProduct = (product) => {
        const newPrice = _countNewPrice(product.price)
        const newProduct = Object.assign({}, product, {price: newPrice} )
        _products.push(newProduct);
    }

    const showProducts = () => {
        console.log(_products);
    }

    return {
        addProduct,
        showProducts,
    }

})();

const product1 = {
    name: 'sluchawki',
    price: 200,
}

const product2 = {
    name: 'komputer',
    price: 2300,
}

shopModule.addProduct(product1);
shopModule.addProduct(product2);
shopModule.showProducts();

console.log(product1);
console.log(product2);