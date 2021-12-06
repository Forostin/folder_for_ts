var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var blockProduct = document.getElementById('output');
var Card = (function () {
    function Card(name, price, url, id, img) {
        this.name = name;
        this.price = price;
        this.url = url;
        this.id = id;
        this.img = img;
    }
    return Card;
}());
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(name, price, url, id, img) {
        var _this = _super.call(this, name, price, url, id, img) || this;
        _this.price = price;
        return _this;
    }
    Product.prototype.build = function () {
        return "<div class=\"classProduct\">\n                  <h2>".concat(this.name, "</h2>\n            <p>").concat(this.price, "grn</p>\n                <div>\n                    <img src=\"").concat(this.img, "\", alt = \"Product image\">\n                </div>\n            <a href = \"").concat(this.url, "\">\n                  <button>Buy</button>\n            </a>\n        </div> ");
    };
    return Product;
}(Card));
var Ads = (function (_super) {
    __extends(Ads, _super);
    function Ads(name, url, id, img, description) {
        var _this = _super.call(this, name, id, url, 0, img) || this;
        _this.description = description;
        return _this;
    }
    Ads.prototype.build = function () {
        return "<div class=\"classProduct\">\n                   <h2>".concat(this.name, "</h2>\n                    <p>").concat(this.description, "grn</p>\n                <div>\n                    <img src=\"").concat(this.img, "\", alt = \"Product image\">\n                </div>\n                <a href = \"").concat(this.url, "\">\n                <button>Show</button>\n  </a>\n</div> ");
    };
    return Ads;
}(Card));
var cardList = [
    new Product('Product 1', 100, '#', 1, ''),
    new Product('Product 2', 500, '#', 2, ''),
    new Ads('Ads 1', '', 0, '', 'desc 1')
];
cardList.forEach(function (card) { return blockProduct.innerHTML += card.build(); });
//# sourceMappingURL=app.js.map