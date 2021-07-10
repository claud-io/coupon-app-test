export type Id = number | string;
export type Nullable<T> = T | null;

export interface Plan {
  book: boolean;
  certificate: boolean;
  certificate_icon: string;
  discount: number;
  discounted_price: number;
  honey_icon: string;
  honey_ids: number[];
  id: number;
  impollinated_flowers: string;
  info: [string, string][];
  monitoring: true;
  name: string;
  phone_icon: string;
  plan_type: string;
  price: number;
  quantity: number;
}
