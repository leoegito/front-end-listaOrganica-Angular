// // src/app/types.ts
// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//     globalMediumPrice: number;
//     userPrice: number;
//     median: number;
//     maximumValue: number;
//     minimumValue: number;
//   }
  
//   export interface ListItem {
//     id: {
//       productList: number;
//       product: Product;
//     };
//     quantity: number;
//     price: number;
//     subTotal: number;
//   }
  
//   export interface ProductList {
//     id: number;
//     title: string;
//     totalValue: number[];
//     listItems: ListItem[];
//   }

//   export interface ListItem {
//     id: {
//       productList: number;
//       product: Product;
//     };
//     quantity: number;
//     price: number;
//     subTotal: number;
//   }
  
// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//     globalMediumPrice: number;
//     userPrice: number;
//     median: number;
//     maximumValue: number;
//     minimumValue: number;
//   }
  
// export interface ListItem {
//     id: {
//       productList: number;
//       product: Product;
//     };
//     quantity: number;
//     price: number;
//     productList: number;
//     product: number;
//     subTotal: number;
// }

// export interface ProductList {
//     id: number;
//     title: string;
//     totalValue: number[];
//     listItems: ListItem[];
// }
export interface Product {
    id: number;
    name: string;
    description: string;
    globalMediumPrice: number;
    userPrice: number;
    median: number;
    maximumValue: number;
    minimumValue: number;
  }
  
  export interface ListItemID {
    productList: number;
    product: Product;
  }
  
  export interface ListItem {
    id: ListItemID;
    quantity: number;
    price: number;
    productList: number;
    product: number;
    subTotal: number;
    editingPrice?: boolean;
    newPrice?: number | null;
  }
  
  export interface ProductList {
    id: number;
    title: string;
    totalValue: number[];
    listItems: ListItem[];
  }
  
  export interface MyUser {
    id: number;
    role: string;
    username: string;
    fullname: string;
    email: string;
    phone: string;
    passwordHash?: string; // Opcional para não ser necessário no retorno
    zipCode?: string;
    city?: string;
    state?: string;
    district?: string;
    street?: string;
    creationTime?: string;
    lastLogin?: string | null;
    productLists?: any[]; // Altere conforme necessário
  }
  
  export interface Price {
    priceValue: number;
  }