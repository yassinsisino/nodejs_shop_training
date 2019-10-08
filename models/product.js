const products = [];

module.exports = class Product {
    constructor(p) {
        this.title = p;
    };

    save() {
        products.push(this);
    }

    fetchAll() {
        return products;
    }
};