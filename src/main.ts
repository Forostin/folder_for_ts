const blockProduct = document.getElementById('output');

abstract class Card {
    protected constructor(
        public name: string,
        public price: number,
        public url: string,
        public id: number,
        public img: string
    ) {

    }
    abstract build(): string;
}
class Product extends Card {
    constructor(
        name: string,
        public price: number,
        url: string,
        id: number,
        img: string,

    ) {
        super(name, price, url, id, img)
    }
    public build(): string {
        return `<div class="classProduct">
                  <h2>${this.name}</h2>
            <p>${this.price}grn</p>
                <div>
                    <img src="${this.img}", alt = "Product image">
                </div>
            <a href = "${this.url}">
                  <button>Buy</button>
            </a>
        </div> `;
    }
}
class Ads extends Card {
    constructor(
        name: string,
        url: string,
        id: number,
        img: string,
        public description
    ) {
        super(name, id, url, 0, img)
    }
    public build(): string {
        return `<div class="classProduct">
                   <h2>${this.name}</h2>
                    <p>${this.description}grn</p>
                <div>
                    <img src="${this.img}", alt = "Product image">
                </div>
                <a href = "${this.url}">
                <button>Show</button>
  </a>
</div> `;
    }
}


const cardList = [
    new Product('Product 1', 100, '#', 1, ''),
    new Product('Product 2', 500, '#', 2, ''),
    new Ads('Ads 1', '', 0, '', 'desc 1')
];
cardList.forEach((card: Card) => blockProduct.innerHTML += card.build());



