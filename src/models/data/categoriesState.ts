interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

interface CategoriesState {
  categories: Category[];
  pending: boolean;
  selectedCategory: string;
}

export type { CategoriesState, Category };
