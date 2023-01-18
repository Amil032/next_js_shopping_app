export interface CategoryProps {
  categories: Category[];
}

export interface Category {
  _id: string;
  description: string;
  icon_source: string;
  sub_categories: SubCategory[];
  __v: number;
}

export interface SubCategory {
  description: string;
  _id: string;
}
