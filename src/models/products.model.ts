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

export type MappedProduct = {
  id?: number;
  name?: string;
  groupId?: number;
};

export declare type Products = Product[];
