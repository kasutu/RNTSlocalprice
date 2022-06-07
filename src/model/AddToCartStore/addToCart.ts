

export class AddToCartItems {
        public itemId: string[];
        public itemPrice: number;
        public image: string;
        public itemQuantitiy: number; 

        constructor(itemId: string[], itemPrice: number, image: string, itemQuantitiy: number) {
            this.itemId = itemId;
            this.itemPrice = itemPrice;
            this.image = image;
            this.itemQuantitiy = itemQuantitiy;
        }
    }

class Cart {
    public itemsInCart: boolean;
    public sumOfItems: number;

    constructor(itemsInCart: boolean, sumOfItems: number) {
        this.itemsInCart = itemsInCart;
        this.sumOfItems = sumOfItems;
    }

}



