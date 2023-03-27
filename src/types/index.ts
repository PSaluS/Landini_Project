export interface productI {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
  }

export interface cartI {
    id: number;
    products: productI[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }

  export interface requestParamI {
    skip: number;
    total: number;
    limit: number;
    pages: number[];
  }

  export interface requestParamInitI {
    skip: number;
    total: number;
    limit: number;
    pages: never[];
}