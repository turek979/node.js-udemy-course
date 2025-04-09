const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.productTitle = title;
    }

    save() {
        products.push(this);
    }

    // static allows js to refer to the whole object and not just an instanciated one you create when calling it
    static fetchAll() {
        return products;
    }
}