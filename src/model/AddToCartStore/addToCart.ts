export interface CartItemProps {
    cartProps: {
      id: string;
      quantity: number;
      item: {
        id: string;
        title: string;
        image: string;
        rating: number;
        price: number;
        location: string;
      };
    };
  }