declare interface User{
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
}

declare interface Customer{
  user: User;
  credit_card?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
  shipping_region: {
    id: number;
    shipping_region: string;
  };
  day_phone?: string;
  eve_phone?: string;
  mob_phone?: string;
  id: number;
}

declare interface Category{
  name: string;
  description: string;
  id: number;
}

declare interface Department {
  name: string;
  id: number;
  description: string;
  categories: Category[];
}

declare interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  image_2?: string;
  discounted_price: string;
  thumbnail: string;
  display: number;
  attributes: any;
}

declare interface CartItem {
  id?: number;
  attributes: any;
  product: Product;
  quantity?: number;
  buy_now: boolean;
  added_on?: Date;
}

declare interface ProductsData{
  products: Product[];
  wordsAccepted: string[];
  wordsIgnored: string[];
  totalPages: number;
  currentPage: number;
  searchUsed: boolean;
  all_words: boolean;
}

declare interface Shipping{
  id?: number
  shipping_type: string;
  shipping_cost: string;
  shipping_region: {
    id?: number;
    shipping_region: string;
  }
}

declare interface Order{
  id?: number;
  total_amount?: number;
  created_on?: Date;
  shipped_on?: Date;
  status: number;
  comments?: any;
  customer?: Customer;
  auth_code?: string;
  reference?: string;
  shipping: number;
  tax?: number;
}

declare interface Review{
  id?: number;
  review: string;
  rating: number;
  customer?: {
    email: string;
    first_name: string;
    last_name: string;
  };
  created_on?: Date;
}

