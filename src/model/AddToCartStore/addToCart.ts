

export class AddToCart {
    public itemId: string[];
    public itemName: string;
    public itemPrice: number;
    public itemQuantity: number;
    public itemImage: string;
    public itemDescription: string;
    public itemCategory: string;

    constructor(itemId: string[], itemName: string, itemPrice: number, itemQuantity: number, itemImage: string, itemDescription: string, itemCategory: string) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
        this.itemImage = itemImage;
        this.itemDescription = itemDescription;
        this.itemCategory = itemCategory;
    }
}

