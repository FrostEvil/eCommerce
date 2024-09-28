export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export type OrderedProduct = Product & {
  quantity: number;
};

export interface Order {
  id: string;
  createdDate: string;
  value: number;
  products: OrderedProduct[];
}

export interface Sale {
  month: string;
  value: number;
}

export interface GetApiProducts {
  products: Product[];
  nextPage: number;
  prevPage: number;
}
