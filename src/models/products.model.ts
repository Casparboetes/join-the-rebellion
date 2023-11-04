interface Specifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
  specifications: Specifications;
}

export declare type Products = Product[];
